const mongoose = require('../database')
const { installReqSchema, adressSchema } = require('./auxSchemas')

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    adress:adressSchema,
    installReq:[installReqSchema],
    photo:String
})

const User = mongoose.model('User',userSchema)

module.exports = User