const mongoose = require('../database')

const adressSchema = new mongoose.Schema({
    street:String,
    number:String,
    district:String,
    city:String,
    state:String,
    zip_code:String,
    lat:String,
    lng:String
})

const installReqSchema = new mongoose.Schema({
    installer:String,
    plan:String,
    solved:Boolean,
})

const auxSchemas = {adressSchema, installReqSchema}

module.exports = auxSchemas