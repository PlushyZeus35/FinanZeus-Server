const PropertyDAO = {}
const Property = require('../../models/property');

PropertyDAO.getAllProperties = () => {
    return Property.findAll();
}

PropertyDAO.createProperty = (property) => {
    return Property.create(property);
}

module.exports = PropertyDAO;