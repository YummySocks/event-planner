const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class EventUser extends Model {}
// this table is used to create relationships between the users and the events
EventUser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      usersId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      eventsId: {
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
      modelName: 'eventuser',
    }
  );
  
  module.exports = EventUser;
