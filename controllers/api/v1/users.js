'use strict';

const userModel = require('@models/user');

module.exports = {
  index: async function(request, response, next) {
    try {
      const allUsers = await userModel.getAll();
      response
        .status(200)
        .json(allUsers);
    } catch(error) {
      next(error);
    }
  }
};