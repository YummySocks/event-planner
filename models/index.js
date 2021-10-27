const User = require('./User')
const Event = require('./Event')
const eventUser = require('./user_event')

Event.belongsToMany(User, {
    through: {
        model: eventUser,
        unique: false,
    },
    as: "Events",
    foreignKey: "events_id"
})

User.belongsToMany(Event, {
    through: {
        model: eventUser,
        unique: false,
    },
    as: "Users",
    foreignKey: "users_id"
})


module.exports = {
    User,
    Event,
    eventUser
}