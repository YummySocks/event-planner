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

  router.get('/:id', (req, res) => {
    try{
      const eventData = await Event.findByPk(req.params.id, {
        include : [
          User,
          {
            model: 
            include [],
          },
        ],
          });
      
          if (eventData) {
            const event = eventData.get({plain: true});

            res.render('single-event', {event});
          } else {
            res.status(404).end();
          }
        } catch (err) {
          res.status(500).json(err);
        }
          });