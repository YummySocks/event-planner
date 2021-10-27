const User = require('./User')
const Event = require('./Event')
const eventUser = require('./EventUser')

Event.belongsToMany(User, {
    through: {
        model: eventUser,
        unique: false,
    },
})

User.belongsToMany(Event, {
    through: {
        model: eventUser,
        unique: false,
    },
})


module.exports = {
    User,
    Event,
    eventUser
}