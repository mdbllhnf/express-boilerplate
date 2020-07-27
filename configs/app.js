'use strict';

const { argv } = require('yargs');

module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: argv.port || process.env.PORT || 8080,
    host: process.env.HOST || '127.0.0.1',
};