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

router.get('/:id', async (req, res)=>{
    try{
        const installer = await Installer.findById(req.params.id)
        return res.send(installer)
    }catch(err){
        return res.sendStatus(404)
    }
})

module.exports = app => app.use('/installer',router)