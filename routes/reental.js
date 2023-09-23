var express = require('express');
var router = express.Router();
const PropertyDAO = require('../helpers/dao/property');
const {hasCorrectInfo} = require('../helpers/propertyHelper');

/* GET Index page. */
router.get('/property', async(req, res) => {
    const properties = await PropertyDAO.getAllProperties();
    res.json(properties);
})

router.post('/property', async (req, res) => {
    const {name, description, url, tokenName, status, contract, price, currency, apy, propertyYield} = req.body;
    const newProperty = {name, description, url, tokenName, status, contract, price, currency, apy, propertyYield};
    const parsedProperty = hasCorrectInfo(newProperty);
    if(parsedProperty.isCorrect){
        const property = await PropertyDAO.createProperty(parsedProperty.property);
        res.json({created: true, property: property});
    }else{
        res.json({created: false, reason: parsedProperty.reason});
    }
})

module.exports = router;