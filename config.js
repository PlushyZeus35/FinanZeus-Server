require('dotenv').config();

module.exports = {
    maintenance: process.env.FINANZEUS_MAINTENANCE,
    database: {
        host: process.env.FINANZEUS_HOST,
        database: process.env.FINANZEUS_DATABASE,
        user: process.env.FINANZEUS_USERNAME,
        password: process.env.FINANZEUS_PASSWORD,
        port: process.env.FINANZEUS_PORT,
    }
}