const express = require('express')

const router = express.Router();

const User = require('../models/user')
const Installer = require('../models/installer')

router.post('/', async (req, res) => {
    try {
        let RecivedEmail = req.body.email
        let u = await User.findOne({ email: RecivedEmail })
        let i = await Installer.findOne({ email: RecivedEmail })
        if (u) {
            return res.send({
                accountType: "User",
                _id: u._id
            })
        }

        else if (i) {
            return res.send({
                accountType: "Installer",
                _id: i._id
            })
        } else {
            res.send()
        }
    } catch (err) {
        res.send(500)
        
    }
})


module.exports = app => app.use('/auth', router)