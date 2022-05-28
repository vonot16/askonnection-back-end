const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))

require('./controllers/userController')(app)
require('./controllers/installerController')(app)

app.listen(3300)