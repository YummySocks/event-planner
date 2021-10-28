const User = require('./User')
const Event = require('./Event')
const EventUser = require('./EventUser')

Event.belongsToMany(User, {
    through: EventUser,
    foreignKey: 'events_id'
})

User.belongsToMany(Event, {
    through: EventUser,
    foreignKey: 'users_id'
})


module.exports = {
    User,
    Event,
    EventUser
}