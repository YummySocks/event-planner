
const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');


  

  //create new event
  router.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
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
    router.delete('/:id', async (req, res) => {
      try {
        const deleteEvent = await Event.destroy({
          where: {
            event_unique: req.params.id,
          },
        })
        res.json(deleteEvent)
      } catch(err) {
        res.status(500).json(err)
      }
});

router.post('/invite', async (req, res) => {
  try {
    const newInvite = await Event.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      dates: req.body.date,
      capacity: req.body.capacity
  })
  res.json(newEvent)
}catch(err) {
  res.status(500).json(err);
}
});
      
module.exports = router;