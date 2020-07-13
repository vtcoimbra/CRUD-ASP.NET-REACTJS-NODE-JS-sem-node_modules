// importando o sequelize e o arquivo database.js 
const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const { INTEGER } = require('sequelize');

//tabela de cliente 
const Cliente = sequelize.define("cliente",{
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    razao:{
        allowNull: false,
        type: Sequelize.STRING(200),
        validate: {
            len: [3,200]
        }
    },
    cnpj:{
        allowNull: false, 
        type: Sequelize.DOUBLE,
        validate:{
            len: [1,14]
        }
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [1,100]
        }
    },
    site:{
        allowNull: true,
        type:Sequelize.STRING(100)
    }
});

module.exports = Cliente;