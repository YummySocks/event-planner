const { User } = require('../models')

const userTestData = [
    {
        username: 'Patrick',
        email: 'patricksutcliffe123@gmail.com',
        password: 'sock1234'
    },
    {
        username: 'Giovanni',
        email: 'giovanni23@gmail.com',
        password: 'yepthis'
    },
    {
        username: 'Landrell',
        email: 'landrell44@gmail.com',
        password: 'dontask'
    },
]

const userSeeds = () => User.bulkCreate(userTestData)

module.exports = userSeeds;