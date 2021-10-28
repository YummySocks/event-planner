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
        if (!user) {
            res.status(400).json({ message: 'Credentials not found!' })
            return;
        }

        const correctPassword = user.checkPassword(req.body.password);

        if (!correctPassword) {
            res.status(400).json({ message: 'Credentials not found!' });
            return;
        }

        req.session.save(() => {
            req.session.email = user.email
            req.session.loggedIn = true;

            res.json({ user, message: 'You are logged in!' });
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

//delete user
router.delete('/', (req, res) => {
    Event
        .remove
})

module.exports = router;