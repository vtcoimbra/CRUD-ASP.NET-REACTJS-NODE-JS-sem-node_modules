// importando o express
const express = require('express');
const router = express.Router();

// importando os controllers
const clienteController = require('../controllers/clientecontroller');
const telefoneController = require('../controllers/telefonecontroller');


//métodos - cliente 
router.post('/cliente', clienteController.Insert);
router.get('/cliente',  clienteController.SearchAll);
router.get('/cliente/:id', clienteController.SearchOne);
router.put('/cliente/:id', clienteController.Update);
router.delete('/cliente/:id', clienteController.Delete);

// métodos - telefone 
router.post('/telefone', telefoneController.Insert);
router.get('/telefone/:idCliente', telefoneController.SearchAll);
router.put('/telefone/:id', telefoneController.Update);
router.delete('/telefone/:id', telefoneController.Delete);


module.exports = router;