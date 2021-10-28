const { EventUser } = require('../models');

const eventUserData = [
    {
        usersId: 1,
        eventsId: 1
    },
    {
        usersId: 2,
        eventsId: 1
    },
    {
        usersId: 3,
        eventsId: 1
    }
]

const seedEventUser = () => EventUser.bulkCreate(eventUserData)

module.exports = seedEventUser

