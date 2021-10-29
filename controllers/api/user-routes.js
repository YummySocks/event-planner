const router = require('express').Router();
const { User,  Event, EventUser } = require('../../models');



//get all users
router.get('/', (req, res) => {
    User.findAll({
        include:[Event]
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

//login, check if email and password are matched in DB
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        console.log(user)
        if (!user) {
            res.status(400).json({ message: 'user not found!' })
            return;
        }
        console.log(req.body.password)
        const validPassword = user.checkPassword(req.body.password);
        console.log(validPassword)
        if (!validPassword) {
            res.status(400).json({ message: 'password not found!' });
            return;
        }
        req.session.save(() => {
            
            req.session.email = user.email
            req.session.username = user.username
            req.session.loggedIn = true;

            res.status(200).json({ user, message: 'You are logged in!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'No user account found!' });
    }
});



router.post('/logout', (req,res) => {
    if(req.session.loggedIn) {
    req.session.destroy(() => {
        res.status(204).end();
    });
}
    else {
    res.status(404).end();
}
});


//creating user
router.post('/', async (req, res) => {
    console.log(req.body.email)
    try {
      const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.email = newUser.email;
        req.session.username = newUser.username;
        req.session.loggedIn = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete user
router.delete('/', (req, res) => {
    Event
        .remove
})

module.exports = router;