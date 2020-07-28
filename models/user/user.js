'use strict';

module.exports = function({userDatabase}) {
  return {
    getAll,
  };

  async function getAll() {
    return await userDatabase.getAll();
  }
};