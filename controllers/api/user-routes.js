const router = require('express').Router();
const { User } = require('../models');



//get all users
router.get('/', (req, res) => {
    User.findAll({
      include: [
        EventUser
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get one user
  router.get('/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        EventUser
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  //create user
  router.post('/', (req, res) => {
    User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
})      
    .then((newUser) => {
        res.json(newEvent)
    })
    .catch((err) => {
        res.json(err);
      });
});

//delte user
router.delete('/', (req, res) => {
    Event
    .remove
})