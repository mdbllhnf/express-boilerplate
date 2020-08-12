'use strict';

module.exports = function({userDatabase}) {
  return {
    getAll,
    getById,
  };

  async function getAll() {
    return await userDatabase.getAll();
  }

  async function getById(id) {
    return await userDatabase.getById(id);
  }
};