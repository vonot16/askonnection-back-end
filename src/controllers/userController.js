const express = require('express')

const User = require('../models/user')

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const user = await User.find()
        return res.send(user)
    }catch(err){

    }
})

module.exports = app => app.use('/user',router)