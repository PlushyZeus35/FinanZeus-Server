const {Model, DataTypes} = require('sequelize');
const sequelize = require('./index');

class Property extends Model {}

Property.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    tokenName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'En venta'
    },
    contract: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        defaultValue: 'EUR'
    },
    APY: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.0
    },
    realAPY: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.0
    },
    yield: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.0
    },
    startDate: {
        type: DataTypes.DATEONLY
    },
    sellDate: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    modelName: "Property",
    timestamps: true
});

module.exports = Property;