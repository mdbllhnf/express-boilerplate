'use strict';

const path = require('path');

module.exports = {
  BASE_PATH: path.join('storage', 'logs'),
  MIN_LEVEL: 'debug',
  CATEGORIES: [
    'general',
    'server',
    'request',
  ],
};