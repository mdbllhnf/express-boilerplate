'use strict';

module.exports = function({userDatabase}) {
  return {
    paginate,
  };

  async function paginate(pagination) {
    return await userDatabase.paginate(pagination);
  }
};