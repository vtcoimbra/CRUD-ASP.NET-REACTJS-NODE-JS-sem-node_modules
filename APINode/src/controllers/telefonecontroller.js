// importando o arquivo telefone.js
const Telefone = require("../models/telefone.js");

// importando a lib http-status
const status = require('http-status');

// insert da tabela de Telefone
exports.Insert = (req, res, next) => {
    const clienteId = req.body.clienteId;
    const telefone = req.body.telefone;

    Telefone.create({
        clienteId: clienteId,
        telefone: telefone
    })
    //validando telefone
    .then(telefone => {
        if(telefone){
            res.status(status.OK).send(telefone);
        }
        else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

//SelectAll da tabela Telefone
exports.SearchAll = (req, res, next) => {
    const idCliente = req.params.idCliente;
    Telefone.findAll({
        where: {
            clienteId: idCliente
        }
    })
    .then(telefone =>{
        if(telefone){
            res.status(status.OK).send(telefone);
        }
    })
    .catch(error => next(error));
}

//Select por ID da tabela Telefone
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    
    Telefone.findByPk(id)
    .then(telefone =>{
        if(telefone){
            res.status(status.OK).send(telefone);
        }
        else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

//Update da tabela Telefone
exports.Update = (req, res, next) => {
    const idTelefone = req.body.idTelefone;
    const telefoneNum = req.body.telefone;

    Telefone.findByPk(idTelefone)
        .then(telefone => {
            if (telefone) {
                telefone.update({
                    telefone: telefoneNum
                    }, {
                        where: {
                            idTelefone: idTelefone
                        }
                    })
                    .then(() => {
                        res.status(status.OK).send()
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send()
            }
        })
        .catch(error => next(error));
}

//Delete de registro na tabela telefone 
exports.Delete = (req, res, next) => {
    const idTelefone = req.params.id;

    Telefone.findByPk(idTelefone)
    .then(telefone => {
        if(telefone){
            telefone.destroy({
                where: {idTelefone: idTelefone}
            })
            .then( () =>{
                res.status(status.OK).send()
            })
            .catch(error => next(error));
        }
        else {
            res.status(status.NOT_FOUND).send()
        }
    })
    .catch(error => next(error));
}