'use strict';

const faker = require('faker/locale/en');

const {generateRecords} = require('@helpers/generators');

const initialRecordsCount = 3;
const publicData = generateRecords(initialRecordsCount, (id) => ({
  id,
  content: `public:${faker.random.alphaNumeric(16)}`,
}));

exports.getAll = async function() {
  return Promise.resolve(publicData);
};

exports.getById = async function(id) {
  return Promise.resolve(publicData.find((record) => record.id === id));
};