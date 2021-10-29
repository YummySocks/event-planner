
const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');


  

  //create new event
  router.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create({
        title: req.body.title,
        description: req.body.description,
        dates: req.body.date,
        capacity: req.body.capacity
    })
    res.json(newEvent)
  }catch(err) {
    res.status(500).json(err);
  }
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