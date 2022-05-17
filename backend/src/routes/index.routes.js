const express = require('express')
const burgerRoutes = require('./burgers.routes')
const authRoutes = require('./auth.routes')

const router = express.Router()

router.use('/', burgerRoutes)

router.use('/auth', authRoutes)

module.exports = router;