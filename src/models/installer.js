const mongoose = require('../database')
const { adressSchema } = require('./auxSchemas')

const installerSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    avaliblePlans:[String],
    adress:adressSchema
})

const Installer = mongoose.model('Installer',installerSchema)

module.exports = Installer