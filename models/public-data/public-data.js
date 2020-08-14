'use strict';

module.exports = function({publicDataDatabase}) {
  return {
    getAll,
    getById,
  };

  async function getAll() {
    return await publicDataDatabase.getAll();
  }

  async function getById(id) {
    return await publicDataDatabase.getById(id);
  }
};