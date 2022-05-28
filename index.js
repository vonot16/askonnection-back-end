const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: '*'
}));
app.use(express.json())

require('./src/controllers/userController')(app)
require('./src/controllers/installerController')(app)
require('./src/controllers/authController')(app)

app.listen(3300)