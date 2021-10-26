const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Event extends Model {}


Event.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dates: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        invite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    }
)


module.exports = Event