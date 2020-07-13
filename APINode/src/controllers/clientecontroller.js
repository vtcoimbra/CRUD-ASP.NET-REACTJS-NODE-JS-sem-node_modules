// importando o arquivo cliente.js
const Cliente = require("../models/cliente.js");

// importando a lib http-status
const status = require('http-status');

// insert da tabela de Cliente
exports.Insert = (req, res, next) => {
    const razao = req.body.razao;
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const site = req.body.site;

    Cliente.create({
            razao: razao,
            cnpj: cnpj,
            email: email,
            site: site
        })
        //validando o cliente
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

// Select All da tabela Cliente
exports.SearchAll = (req, res, next) => {
    Cliente.findAll()
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
}

// Select por ID na tabela Cliente
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

// Update da tabela Cliente
exports.Update = (req, res, next) => {
    const id = req.body.id;
    const razao = req.body.razao;
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const site = req.body.site;

    console.log(req.body);
    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                        razao: razao,
                        cnpj: cnpj,
                        email: email,
                        site: site
                    }, {
                        where: {
                            id: id
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

//Delete de registro na tabela Cliente
exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
    .then(cliente => {
        if(cliente){
            cliente.destroy({
                where: {id: id}
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