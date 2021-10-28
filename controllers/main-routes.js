const router = require('express').Router();
const {Event, User, EventUser} = require('../models')
const withAuth = require('../utils/auth')

// get all events
router.get('/', withAuth, async (req, res) => {
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

  //login
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  //logout
  
  


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