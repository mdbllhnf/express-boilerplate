'use strict';

const faker = require('faker/locale/en');

const { generateRecords } = require('@utility/generators');

const initialRecordsCount = 5;
const users = generateRecords(initialRecordsCount, (index) => ({
    id: index,
    key: faker.random.alphaNumeric(16),
    full_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
}));

exports.getAll = () => Promise.resolve(users);