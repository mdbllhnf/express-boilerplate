'use strict';

const path = require('path');

module.exports = Object.freeze({
  BASE_PATH: path.join('storage', 'logs'),
  MIN_LEVEL: 'debug',
  CATEGORIES: [
    'general',
  ],
});