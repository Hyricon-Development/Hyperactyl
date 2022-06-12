const Keyv = require('keyv');
const chalk = require('chalk')

const db = new Keyv(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

db.on('error', err => {
    console.log(chalk.red("[Hyperactyl] An error has occured while trying to access the database"));
    console.log(chalk.red(err));
});

module.exports = db