const { Event } = require('../models')

const eventTestData = [
    {
        title: 'Bachelor Party',
        description: 'Getting together to celebrate BLANK getting hitched',
        dates: '10/31/21',
        location: 'your moms house lol',
        capacity: 23,
    },
    {
        title: 'Test event',
        description: 'MORE TEXT HERE BLAH BLAH',
        dates: 'WOULDNT YOU LIKE TO KNOW',
        location: 'fuck around and find out',
        capacity: 420,
    }
]

const eventSeeds = () => Event.bulkCreate(eventTestData)

module.exports = eventSeeds;