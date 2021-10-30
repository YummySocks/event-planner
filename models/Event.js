const { Sequelize, Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/config');

class Event extends Model {}

// creating the table values for events
Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        event_unique: {
            type: DataTypes.STRING,
            defaultValue: UUIDV4,
            allowNull:false,
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
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
)


module.exports = Event