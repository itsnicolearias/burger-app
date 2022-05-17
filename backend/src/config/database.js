const mongoose = require('mongoose')
const enviromentConfig = require('./environmentConfig')

try {
    mongoose.connect(enviromentConfig.mongo.url)
    console.log('DB connected')
} catch (error) {
    console.log(error)
}