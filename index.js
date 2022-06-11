const express = require('express')
const session = require('express-session')
const app = express()
module.exports.app = app

require('dotenv').config()
module.exports.env = process.env

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSPORT,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
  })

module.exports.mysql = pool

app.use(session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
       maxAge: 60 * 60 * 1000
    } 
}));

app.listen(process.env.APP_PORT, (err) => {
    console.log(chalk.magenta(`[Hyperactyl] Hyperactyl is listening on port ${process.env.APP_PORT}`))
    if (err) console.log(err)
})
