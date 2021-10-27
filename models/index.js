const User = require('./User')
const Event = require('./Event')

User.hasMany(Event, {
    foreignKey: 'user_email'
})

Event.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})



module.exports = {
    User,
    Event
}