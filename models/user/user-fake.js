'use strict';

const usersDatabase = require('@database/fake/users');

exports.getAll = async () => await usersDatabase.getAll();