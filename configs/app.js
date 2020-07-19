'use strict';

const { argv } = require('yargs');
const { env } = process;

exports.env = env.NODE_ENV || 'development';
exports.port = argv.port || env.PORT || 8080;