const mongoose = require('../database')

const planSchema = new mongoose.Schema({
    isp: String,
    data_capacity: Number,
    download_speed: Number,
    upload_speed: Number,
    description: String,
    price_per_month: Number,
    type_of_internet: String
})

const Plan = mongoose.model('Plan',planSchema)

module.exports = Plan