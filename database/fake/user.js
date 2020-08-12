'use strict';

const faker = require('faker/locale/en');

const {generateRecords} = require('@helpers/generators');

const initialRecordsCount = 5;
const users = generateRecords(initialRecordsCount, (id) => ({
  id,
  key: faker.random.alphaNumeric(16),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
}));

exports.getAll = async function() {
  return Promise.resolve(users);
};

exports.getById = async function(id) {
  return Promise.resolve(users.find((record) => record.id === id));
};