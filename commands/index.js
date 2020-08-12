'use strict';

require('dotenv/config');
require('module-alias/register');

const commandName = process.argv[2];
try {
  const command = require(`@commands/${commandName}`);
  command(process.argv.splice(3));
} catch(error) {
  console.log(`Command '${commandName}' not found !`);
}