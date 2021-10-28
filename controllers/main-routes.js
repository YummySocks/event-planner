const router = require('express').Router();
const {Event, User, EventUser} = require('../models')
const withAuth = require('../utils/auth')

// get all events
router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [User],
          })
          const events = eventData.map((event) => event.get({plain : true}))

          res.render('home', {events})
    } catch (err) {
        res.redirect('login')
        res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });

// get one event
router.get('/event/:id', async (req, res) => {
  try{
    const eventData = await Event.findByPk(req.params.id, {
      include : [
        User,
      ],
        });
        if (eventData) {
          const event = eventData.get({plain: true});

          res.render('event', {event});
        } else {
          res.status(404).end();
        }
      } catch (err) {
        res.status(500).json(err);
      }
        });
  module.exports = router;