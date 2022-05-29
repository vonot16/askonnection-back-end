const express = require('express')

const Installer = require('../models/installer')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const installer = await Installer.find()
        return res.send(installer)
    } catch (err) {
        return res.sendStatus(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const installer = await Installer.findById(req.params.id)
        return res.send(installer)
    } catch (err) {
        return res.sendStatus(404)
    }
})

router.post('/addPlan', async (req, res) => {
    try {
        const id = req.body.id
        const plan = req.body.plan
        const installer = await Installer.updateOne({ _id: id }, { $push: { avaliblePlans: plan } })
        return res.send(installer)
    } catch (err) {
        return res.send(500)
    }
})

router.get('/getPlansInstallers/:id', async (req, res) => {
    try {
        const installer = await Installer.findById(req.params.id)
        return res.send(installer.avaliblePlans)
    } catch (err) {
        return res.sendStatus(404)
    }
})

router.post('/newInstaller', async (req, res) => {
    try {
        const installer = await Installer.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                avaliblePlans:["6292bd76955329966d261553"],
                adress: req.body.adress,
                photo: req.body.photo
            }
        )
        return res.send(installer)
    } catch (err) {
        return res.sendStatus(404)
    }
})


module.exports = app => app.use('/installer', router)