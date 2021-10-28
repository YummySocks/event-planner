const router = require('express').Router();
const {Event, User, EventUser} = require('../models')
const withAuth = require('../utils/auth')

// get all events
router.get('/', withAuth, async (req, res) => {
    try {
        const eventData = await Event.findAll({
            where: {
                userId: req.session.userId,
              },
            include: [User],
          })
          const events = eventData.map((event) => event.get({plain : true}))

          res.render('home', {events})
    } catch (err) {
        res.redirect('login')
        res.status(500).json(err);
    }
  });


  module.exports = router;