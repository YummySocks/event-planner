const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');

router.post('/', async (req,res) => {
    try {
        const findUserId = await User.findOne({
            where: {
                email: req.body.toInvite
            }
        })
        const userId = await findUserId.get({plain: true})
        console.log(userId)
        const findEid = await Event.findOne({
            where: {
                event_unique: req.body.eventId
            }
        })
        const evenId = await findEid.get({plain: true})
        const newEventUser = await EventUser.create({
            usersId: userId.id,
            eventsId: evenId.id
        })
        res.json(newEventUser)
    } catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;