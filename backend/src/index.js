const express = require('express')
const environmentConfig = require('./config/environmentConfig')
require('./config/database')


const app = express()

app.listen(environmentConfig.app.port, () => console.log('Server running'));