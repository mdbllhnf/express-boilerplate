'use strict';

const faker = require('faker/locale/en');

const {generateRecords} = require('@helpers/generators');
const {paginateRecords} = require('@helpers/collections');

const initialRecordsCount = 19;
const users = generateRecords(initialRecordsCount, (id) => ({
  id,
  key: faker.random.alphaNumeric(16),
  full_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  created_at: faker.date.past(),
  updated_at: faker.date.past(),
}));

exports.paginate = async function(pagination) {
  return Promise.resolve(paginateRecords(users, pagination));
};

exports.getById = async function(id) {
  return Promise.resolve(users.find((record) => record.id === id));
};