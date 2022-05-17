const express = require('express')
const environmentConfig = require('./config/environmentConfig')
const indexRoutes = require('./routes/index.routes')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('./config/database')



const app = express()
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use('/', indexRoutes)

app.listen(environmentConfig.app.port, () => console.log('Server running'));