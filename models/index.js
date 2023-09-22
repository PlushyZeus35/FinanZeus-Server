const { Sequelize } = require('sequelize');
const {database} = require('../config');
let sequelize;

sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: "mariadb",
        port: database.port,
        pool: {
            max: 15,
            min: 5,
            idle: 20000,
            evict: 15000,
            acquire: 30000
        },
        timezone: '+02:00'
    }
);

module.exports = sequelize;