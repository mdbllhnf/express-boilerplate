'use strict';

const userModel = require('@models/user');

exports.index = async function(request, response, next) {
  const pagination = {
    page: parseInt(request.query.page) || 1,
    perPage: parseInt(request.query.per_page) || 5,
  };
  try {
    const paginatedUsers = await userModel.paginate(pagination);
    return response.json(paginatedUsers);
  } catch(error) {
    next(error);
  }
};

exports.show = async function(request, response, next) {
  const userId = parseInt(request.params.id);
  if(!userId) {
    return response.abort(400);
  }
  try {
    const user = await userModel.getById(userId);
    if(!user) {
      return response.abort(404);
    }
    return response.json(user);
  } catch(error) {
    next(error);
  }
};