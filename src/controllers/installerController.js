const express = require('express')

const Installer = require('../models/installer')

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const installer = await Installer.find()
        return res.send(installer)
    }catch(err){

    }
})

module.exports = app => app.use('/installer',router)