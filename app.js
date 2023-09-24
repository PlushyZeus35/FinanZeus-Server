const express = require('express');
const path = require('path');
const sequelize = require('./models/index');
const bodyParser = require('body-parser');
var cors = require('cors')
require('./models/associations');
// INITIALIZATIONS
const app = express();
sequelize.sync( {force: false }).then(async () => {
    console.log("Conectado a la base de datos!");
}).catch(error => {
    console.log("Se ha producido un error!", error);
});
app.use(cors());

// SETTINGS
// Set static path to serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// TEMPLATE ENGINE

// MIDDLEWARES

// GLOBAL VARIABLES

// ROUTES
app.use(require('./routes'));
app.use(require('./routes/index'));
app.use('/reental',require('./routes/reental'));
module.exports = app;