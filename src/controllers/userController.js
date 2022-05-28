const express = require('express')
const timeOut = require('connect-timeout')

const User = require('../models/user')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        return res.send(user)
    } catch (err) {
        return res.sendStatus(500)
    }
})

router.get('/wantInstall', async(req, res)=>{
    try{
        let user = await User.find({installReq:{$exists:true}})
        user.map((u, i) =>{
            u.installReq = u.installReq.filter(i => i.solved===false)
            if(u.installReq.length==0)
                user.splice(i,1)
        })
        res.send(user)
    } catch (err){
        return res.sendStatus(500)
    }
})

router.get('/installask/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        return res.send(user.installReq)
    } catch (err){
        return res.sendStatus(404)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.send(user)
    } catch (err) {
        return res.sendStatus(404)
    }
})

module.exports = app => app.use('/user', router)