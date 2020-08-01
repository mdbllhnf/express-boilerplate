'use strict';

module.exports = function({userDatabase}) {
  return {
    paginate,
    getById,
  };

  async function paginate(pagination) {
    return await userDatabase.paginate(pagination);
  }

  async function getById(id) {
    return await userDatabase.getById(id);
  }
};