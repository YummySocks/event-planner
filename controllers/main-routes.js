const router = require('express').Router();
const { Session } = require('express-session');
const session = require('express-session');
const {Event, User, EventUser} = require('../models')
const withAuth = require('../utils/auth')

// get all events
router.get('/', withAuth, async (req, res) => {
    try {
        const eventData = await User.findOne({
          where: {
            email: req.session.email
          },
            include: [Event],
          })
          const events = eventData.get({plain : true})
          res.render('home', {events})
    } catch (err) {
        res.status(500).json(err);
    }
  });


// router link to move to creating new event
router.get('/new', (req,res) => {
  res.render('createNew')
})

router.get('/invite', (req,res) => {
  res.render('invite')
})

  // login
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  //logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  


// get one event
router.get('/event/:id', async (req, res) => {
  try{
    const eventData = await Event.findOne({
      where: {
        event_unique: req.params.id,
      },
      include : [
        User,
      ],
        });
          const event = eventData.get({plain: true});
          res.render('event', {event});
      } catch (err) {
        res.status(500).json(err);
      }
        });
  module.exports = router;