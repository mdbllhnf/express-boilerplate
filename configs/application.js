'use strict';

const {argv} = require('yargs');

module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: argv.port || process.env.PORT || 8080,
  HOST: process.env.HOST || '127.0.0.1',
};