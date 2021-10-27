
const router = require('express').Router();
const { Event, User } = require('../../models');



// get all events
router.get('/', (req, res) => {
    Event.findAll({
      include: [
        User
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get one event
  router.get('/:id', (req, res) => {
    Event.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        User
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  //create new event
  router.post('/', (req, res) => {
        Event.create({
        title: req.body.title,
        description: req.body.description,
        dates: req.body.dates,
        capacity: req.body.capacity,
        invite: req.body.invite,
        host: req.body.host
    })      
        .then((newEvent) => {
            res.json(newEvent)
        })
        .catch((err) => {
            res.json(err);
          });
  });
  


  // update event (only title and description added for now)
router.put('/:id', (req, res, next ) => {
    Event.update(
        {title: req.body.title, description: req.body.description},
        {returning: true, where: {id: req.params.id}}
    )
      .then(function ([rowsUpdate, [updatedEvent]]){
          res.json(updatedEvent)
      })
      .catch(next) 
    })

    router.delete('/', (req, res) => {
        Event
        .remove
    }