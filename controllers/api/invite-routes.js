const router = require('express').Router();
const { Event, EventUser, User } = require('../../models');
const mailFunc = require('../../utils/mailer');
// grabs the user data then the event data and then links them together through the EventUser table
router.post('/', async (req,res) => {
    try {
        console.log(req.body.fromInvite)
        console.log(req.body.toInvite)
        console.log(req.body.invite)
        mailFunc(req.body.fromInvite, req.body.toInvite, req.body.invite)



        const findUserId = await User.findOne({
            where: {
                email: req.body.toInvite
            }
        })
        const userId = await findUserId.get({plain: true})
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