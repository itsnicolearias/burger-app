const dotenv = require('dotenv');
dotenv.config();

const { 
    APP_PORT,
    MONGO_URL,
    TOKEN_SECRET,
} = process.env;

const enviromentConfig = {
    app: {
        port: APP_PORT,
    },
    mongo: {
        url: MONGO_URL,
    },
    jwt: {
        secret: TOKEN_SECRET
    }
}

module.exports = enviromentConfig;