import React from 'react'
import Main from '../template/main'

import axios from 'axios'


const baseUrl = 'http://localhost:3003/sistema/'
const initialState2= {
    telefone: {telefone: ''},
    list: []
};
export default class Telefone extends React.Component{
    
    state = {...initialState2}

    componentWillMount(){
        axios(baseUrl + 'telefone').then(resp => {
            this.setState({ list:resp.data })
        });
    }

    clearT(){
        this.setState({telefone: initialState2.telefone});
    }

    saveT(){
        const telefone = this.state.telefone;
        const method = telefone.id ? 'put' : 'post';
        const url = telefone.id ? `${baseUrl}telefone/${telefone.id}` : baseUrl + 'telefone';
        axios[method](url, telefone).then(resp => {
            this.componentWillMount();
            this.setState({telefone: initialState2.telefone});
        });
    }

    getUpdateList2(telefone, add = true){
        const list = this.state.list.filter(t => t.id !== telefone.id)
        if(add) list.unshift(telefone)
        return list
    }

    updateField2(event) {
        const telefone = { ...this.state.telefone};
        telefone[event.target.name] = event.target.value;
        this.setState({ telefone });
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                            name="telefone" value={this.state.telefone.razao}
                            onChange={e => this.updateField(e)}
                            placeholder="Telefone" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-success" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-danger ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
                <br /> <br />
            </div>
        )
    }

    load(telefone){
        this.setState({ telefone })
    }

    remove(telefone){
        axios.delete(`${baseUrl}telefone/${telefone.id}`).then(resp => {
            const list = this.getUpdateList(telefone, false)
            this.setState({ list })
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>ID</th>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Email</th>
                        <th>Site</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(telefone =>{
            return(
                <tr key={telefone.idTelefone}>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(telefone)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(telefone)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                    <td>{telefone.idTelefone}</td>
                    <td>{telefone.telefone}</td>
                </tr>
            )
        })
    }
    }
