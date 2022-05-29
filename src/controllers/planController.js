const express = require('express')

const Plan = require('../models/plan')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const plan = await Plan.find()
        return res.send(plan)
    } catch (err) {
        return res.sendStatus(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id)
        return res.send(plan)
    } catch (err) {
        return res.sendStatus(404)
    }
})

router.post('/new/', async (req, res) => {
    try {
        const p = req.body
        const plan = Plan.create(
            {
                isp: p.isp,
                data_capacity: p.data_capacity,
                download_speed: p.download_speed,
                upload_speed: p.upload_speed,
                description: p.description,
                price_per_month: p.price_per_month,
                type_of_internet: p.type_of_internet
            }
        )
        return res.send(plan)
    } catch (err) {
        return res.sendStatus(404)
    }
})

module.exports = app => app.use('/plan', router)