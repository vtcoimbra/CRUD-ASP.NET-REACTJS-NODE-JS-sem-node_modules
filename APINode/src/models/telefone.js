// importando o sequelize e o arquivo database.js 
const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const { INTEGER } = require('sequelize');

//tabela de telefone
const Telefone = sequelize.define("telefone",{
    idTelefone:{
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    clienteId:{
        allowNull: false,
        type: Sequelize.INTEGER
        
    },
    telefone:{
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            len:[1,17]
        }
    }
});

module.exports = Telefone;