const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes = require('./main-routes')

// simple routing things
router.use('/api', apiRoutes);
router.use('/', mainRoutes)


module.exports = router;