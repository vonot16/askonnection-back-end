const express = require('express')

const router = express.Router();

const User = require('../models/user')

router.get('/', async (req, res)=>{
    try{
        const user = await User.find({ email:req.body.})
        return res.send(user)
    }catch(err){

    }
})


module.exports = app => app.use('/auth',router)