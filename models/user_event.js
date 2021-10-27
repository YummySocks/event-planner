const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class EventUser extends Model {}

EventUser.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
      },
      events_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'event',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'event_user',
    }
  );
  
  module.exports = EventUser;