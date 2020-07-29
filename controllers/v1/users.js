'use strict';

const userModel = require('@models/user');

exports.index = async function(request, response, next) {
  try {
    const allUsers = await userModel.paginate({page:1, perPage: 5});
    response
      .status(200)
      .json(allUsers);
  } catch(error) {
    next(error);
  }
};