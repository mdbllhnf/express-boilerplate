'use strict';

const path = require('path');

exports.BASE_PATH = path.join('storage', 'logs');
exports.MIN_LEVEL = 'debug';
exports.TRANSPORTS = {
    'development': [
      'console',
    ],
    'production': [
      'single-file',
    ],
};
exports.CATEGORIES = [
  'general',
  'request',
];