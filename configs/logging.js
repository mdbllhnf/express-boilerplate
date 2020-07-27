'use strict';

const path = require('path');

module.exports = {
    basePath: path.join('storage', 'logs'),
    minLevel: 'debug',
    categories: [
        'general',
    ],
};