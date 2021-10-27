const { eventUser } = require('../models');

const eventUserData = [
    {
        users_id: 1,
        events_id: 1
    },
    {
        users_id: 2,
        events_id: 1
    },
    {
        users_id: 3,
        events_id: 1
    }
]

const seedEventUser = () => eventUser.bulkCreate(eventUserData)

router.delete('/:id', (req, res) => {
    eventUser.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((products) => {
        console.log(products);
        res.json(products);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  

module.exports = seedEventUser

