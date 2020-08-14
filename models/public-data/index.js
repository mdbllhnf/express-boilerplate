'use strict';

const publicData = require('@models/public-data/public-data');
const publicDataDatabase = require('@database/fake/public-data');

module.exports = publicData({publicDataDatabase});