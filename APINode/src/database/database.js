// importando o sequelize 
const Sequelize = require('sequelize');

// informando o ambiente de desenvolvimento 
const environment = process.env.NODE_ENV || 'development';

// arquivo com string de conexão
const config = require ('../config/config.js')[environment];

// instanciando o sequelize
const sequelize = new Sequelize (
    config.database.name, 
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

//exportando para acesso em outros arquivos
module.exports = sequelize;