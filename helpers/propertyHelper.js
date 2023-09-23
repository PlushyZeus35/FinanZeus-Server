const PropertyHelper = {};
const STATUS_VALUES = ['En venta', 'En reforma', 'En explotación', 'Vendido', '', undefined];
const CURRENCY_VALUES = ['EUR', 'USD', '', undefined];

PropertyHelper.hasCorrectInfo = (property) => {
    // Validate mandatory information
    if(property.name==='' || property.name===undefined || property.tokenName==='' || property.tokenName===undefined || property.contract==='' || property.contract===undefined || property.price==='' || property.price===undefined) return {isCorrect: false, reason: 'Mandatory information no populated'}
    // Validate status value
    if(!STATUS_VALUES.includes(property.status)) return {isCorrect: false, reason: 'Property status not available'}
    // Validate currency value
    if(!CURRENCY_VALUES.includes(property.currency)) return {isCorrect: false, reason: 'Property status not available'}
    // Validate number values
    if((property.apy!=undefined && isNaN(property.apy)) || (property.propertyYield!=undefined && isNaN(property.propertyYield)) || (property.price!=undefined && isNaN(property.price))) return {isCorrect: false, reason: 'Number invalid'}
    // Parse number values
    if(property.apy) property.apy = parseFloat(property.apy).toFixed(2);
    if(property.price) property.price = parseFloat(property.price).toFixed(2);
    if(property.propertyYield) property.propertyYield = parseFloat(property.propertyYield).toFixed(2);
    return {isCorrect: true, property: property};
}

module.exports = PropertyHelper;