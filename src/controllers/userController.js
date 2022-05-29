const express = require('express')

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

router.post('/addinstallask', async(req, res) =>{
    const data = {
        plan: req.body.plan,
        solved: false,
        installer:""
    }
    try{
        const user = await User.updateOne({_id:req.body.userId},
            { $push: { installReq:data } })
            return res.send(user)
    }catch(err){
        return res.sendStatus(500)
    }
})

router.post('/modifyinstallask', async(req, res) =>{
    const data = {
        id: req.body.id,
        installer: req.body.installer,
    }
    try{
        const user = await User.updateOne({'installReq._id':`${data.id}`}, {'$set': {
            'installReq.$.installer': `${data.installer}`,
            'installReq.$.solved': true
        }})
            return res.send(user)
    }catch(err){
        console.log(err)
        return res.sendStatus(500)
    }
})

router.post('/new/', async(req, res)=>{
    try{
        const user = await User.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                installReq: [],
                adress: req.body.adress,
                photo: req.body.photo
            }
            )
        return res.send(user)
    } catch (err){
        return res.sendStatus(404)
    }
})

module.exports = app => app.use('/user', router)