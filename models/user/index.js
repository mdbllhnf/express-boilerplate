'use strict';

const user = require('@models/user/user');
const userDatabase = require('@database/fake/user');

module.exports = user({ userDatabase });