const router = require('express').Router();
const loginRoute = require('./user-routes')



router.use('/login', loginRoute);


module.exports = router;