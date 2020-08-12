'use strict';

const userModel = require('@models/user');

exports.index = async function(request, response, next) {
  try {
    const allUsers = await userModel.getAll();
    return response
      .status(200)
      .json(allUsers);
  } catch(error) {
    next(error);
  }
};

exports.show = async function(request, response, next) {
  try {
    const userId = parseInt(request.params.id);
    if (!userId) {
      response.abort(400);
    }
    const user = await userModel.getById(userId);
    if (!user) {
      response.abort(404);
    }
    return response.json(user);
  } catch(error) {
    next(error);
  }
};