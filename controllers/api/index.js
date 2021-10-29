const router = require('express').Router();
const eventRoute = require('./event-routes')
const userRoute = require('./user-routes')
const inviteRoute = require('./invite-routes')

router.use('/event', eventRoute)
router.use('/users', userRoute)
router.use('/invite', inviteRoute)

router.put()

  module.exports = router;