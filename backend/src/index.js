const express = require('express')
const environmentConfig = require('./config/environmentConfig')
const indexRoutes = require('./routes/index.routes')
require('./config/database')



const app = express()
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use('/', indexRoutes)

app.listen(environmentConfig.app.port, () => console.log('Server running'));