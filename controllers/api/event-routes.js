
const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');




//creates new event and auto adds the user that created the event to be included in the list of attendees
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
    const checkIdEvent = await newEvent.get({ plain: true })
    const findUserId = await User.findOne({
      where: {
        email: req.body.userEmail
      }
    })
    const userId = await findUserId.get({ plain: true })
    const findEid = await Event.findOne({
      where: {
        event_unique: checkIdEvent.event_unique
      }
    })
    const evenId = await findEid.get({ plain: true })
    const newEventUser = await EventUser.create({
      usersId: userId.id,
      eventsId: evenId.id
    })
    res.json(newEventUser)
  } catch (err) {
    res.status(500).json(err);
  }
});
// used for testing to grab a single event by its base id number
router.get('/:id', async (req, res) => {
  try{
    const eventData = await Event.findByPk(req.params.id,{
      include : [
        User,
      ],
        });
          res.json(eventData);
      } catch (err) {
        res.status(500).json(err);
      }
        });


// update event (only title and description added for now)
// possibly for future development
router.put('/:id', (req, res, next) => {
  Event.update(
    { title: req.body.title, description: req.body.description },
    { returning: true, where: { id: req.params.id } }
  )
    .then(function ([rowsUpdate, [updatedEvent]]) {
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
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;