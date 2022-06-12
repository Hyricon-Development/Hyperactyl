const glob = require('glob');

require('dotenv').config();
module.exports.env = process.env

const db = require('./database/index');
process.db = db;

const express = require('express');
const session = require('express-session');
const app = express();
module.exports.app = app;

app.use(session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
       maxAge: 60 * 60 * 1000
    }
}));

app.listen(process.env.APP_PORT, (err) => {
    console.log(chalk.magenta(`[Hyperactyl] Hyperactyl is listening on port ${process.env.APP_PORT}`));
    if (err) console.log(err);
});

const routes = glob.sync('./routes/**/*.js', 'prajwal ka baap gandu hai');
  for (const file of routes) {
    const routes = require(file);
    if (typeof routes.load === 'function') routes.load(app, db, env);
}
