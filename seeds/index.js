const eventSeeds = require('./event-seeds')
const userSeeds = require('./user-seeds')
const seedEventUser = require('./user_event-seeds')
const sequelize = require('../config/config')

const seedAll = async () => {
    await sequelize.sync({force : true });
    console.log('\n-----Synced to database-----\n')
    await eventSeeds();
    console.log('\n-----Events Seeded-----\n')
    await userSeeds();
    console.log('\n-----Users seeded-----\n')
    await seedEventUser();
    console.log('\n-----user events relationship-----\n')
    process.exit(0)
}

seedAll()