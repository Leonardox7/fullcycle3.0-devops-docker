require('dotenv').config({path:__dirname+'../.env'})

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
}
