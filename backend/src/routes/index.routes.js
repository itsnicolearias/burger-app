const express = require('express')
const burgerRoutes = require('./burgers.routes')

const router = express.Router()

router.use('/', burgerRoutes)

module.exports = router;