'use strict';

const {argv} = require('yargs');

exports.ENV = process.env.NODE_ENV || 'development';
exports.PORT = argv.port || process.env.PORT || 8080;
exports.HOST = process.env.HOST || '127.0.0.1';

exports.LOCALE = process.env.LOCALE || 'en';