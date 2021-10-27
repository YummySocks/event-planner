const router = require('express').Router();
const loginRoute = require('./user-routes')



router.use('/login', loginRoute);


module.exports = router;


const deleteEvent = (id) =>
  fetch(`/api/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const saveEvent = (event) =>
  fetch(`/api/${event}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  const getEvent = (id) =>
  fetch(`/api/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });