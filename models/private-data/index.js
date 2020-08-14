'use strict';

const privateData = require('@models/private-data/private-data');
const privateDataDatabase = require('@database/fake/private-data');

module.exports = privateData({privateDataDatabase});