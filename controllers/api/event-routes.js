
const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');

  
  // get one event
  router.get('/:id', (req, res) => {
    Event.findByPk(req.params.id, {
      include: [User]
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


    //delete event
    router.delete('/:id', (req, res) => {
        Event.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then((products) => {
              ///delete applicable eventUser data. 
              ///delete all elements in eventUser with same event ID here
            res.json(products);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      });
      
module.exports = router;