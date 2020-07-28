'use strict';

const path = require('path');

exports.BASE_PATH = path.join('storage', 'logs');
exports.MIN_LEVEL = 'debug';
exports.CATEGORIES = [
  'general',
  'server',
  'request',
];