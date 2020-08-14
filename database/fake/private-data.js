'use strict';

const faker = require('faker/locale/en');

const {generateRecords} = require('@helpers/generators');

const initialRecordsCount = 3;
const privateData = generateRecords(initialRecordsCount, (id) => ({
  id,
  content: `private:${faker.random.alphaNumeric(16)}`,
}));

exports.getAll = async function() {
  return Promise.resolve(privateData);
};

exports.getById = async function(id) {
  return Promise.resolve(privateData.find((record) => record.id === id));
};