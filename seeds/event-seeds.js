const { Event } = require('../models')

const eventTestData = [
    {
        title: 'Bachelor Party',
        description: 'Getting together to celebrate BLANK getting hitched',
        dates: '10/31/21',
        capacity: 23,
    }
]

const eventSeeds = () => Event.bulkCreate(eventTestData)

module.exports = eventSeeds;