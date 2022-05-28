const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://masteruser:1zzN4MFTjczMDgC7@cluster0.twyhwm8.mongodb.net/askonnection-db?retryWrites=true&w=majority')
mongoose.Promise = global.Promise
module.exports = mongoose