const router = require('express').Router();
const eventRoute = require('./event-routes')
const userRoute = require('./user-routes')

router.use('/event', eventRoute)
router.use('/users', userRoute)

router.put()

  module.exports = router;