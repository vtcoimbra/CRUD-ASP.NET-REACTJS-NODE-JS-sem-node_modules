import React from 'react'
import Main from '../template/main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de Cliente'
}

const baseUrl = 'http://localhost:3003/sistema/'
const initialState= {
    cliente: {razao:'', cnpj:0, email:'', site:''},
    list: []
};
export default class Cliente extends React.Component{
    
    state = {...initialState}

    componentWillMount(){
        axios(baseUrl + 'cliente').then(resp => {
           
            this.setState({ list:resp.data })
        });
    }

    clear(){
        this.setState({cliente: initialState.cliente});
    }

    save(){
        const cliente = this.state.cliente;
        const method = cliente.id ? 'put' : 'post';
        const url = cliente.id ? `${baseUrl}cliente/${cliente.id}` : baseUrl + 'cliente';
        axios[method](url, cliente).then(resp => {
            this.componentWillMount();
            this.setState({cliente: initialState.cliente});
        });
    }

    getUpdateList(cliente, add = true){
        const list = this.state.list.filter(c => c.id !== cliente.id)
        if(add) list.unshift(cliente)
        return list
    }

    updateField(event) {
        const cliente = { ...this.state.cliente};
        cliente[event.target.name] = event.target.value;
        this.setState({ cliente });
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Razão Social</label>
                            <input type="text" className="form-control"
                            name="razao" value={this.state.cliente.razao}
                            onChange={e => this.updateField(e)}
                            placeholder="Razão Social" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CNPJ</label>
                            <input type="text" className="form-control"
                            name="cnpj" value={this.state.cliente.cnpj}
                            onChange={e => this.updateField(e)}
                            placeholder="CNPJ" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"
                            name="email" value={this.state.cliente.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Site</label>
                            <input type="text" className="form-control"
                            name="site" value={this.state.cliente.site}
                            onChange={e => this.updateField(e)}
                            placeholder="Site" />
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

    load(cliente){
        this.setState({ cliente })
    }

    remove(cliente){
        axios.delete(`${baseUrl}cliente/${cliente.id}`).then(resp => {
            const list = this.getUpdateList(cliente, false)
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
        return this.state.list.map(cliente =>{
            
            return(
                <tr key={cliente.id}>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(cliente)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(cliente)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                    <td>{cliente.id}</td>
                    <td>{cliente.razao}</td>
                    <td>{cliente.cnpj}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.site}</td>
                    
                </tr>
            )
        })
    }


    render(){        
        return(            
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}