'use strict';

module.exports = function({privateDataDatabase}) {
  return {
    getAll,
    getById,
  };

  async function getAll() {
    return await privateDataDatabase.getAll();
  }

  async function getById(id) {
    return await privateDataDatabase.getById(id);
  }
};