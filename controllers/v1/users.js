'use strict';

const userModel = require('@models/user');

exports.index = async function(request, response, next) {
  try {
    const pagination = {
      page: parseInt(request.query.page) || 1,
      perPage: parseInt(request.query.per_page) || 5,
    };
    const paginatedUsers = await userModel.paginate(pagination);
    return response.json(paginatedUsers);
  } catch(error) {
    next(error);
  }
};

exports.show = async function(request, response, next) {
  try {
    const userId = parseInt(request.params.id);
    if(!userId) {
      response.abort(400);
    }
    const user = await userModel.getById(userId);
    if(!user) {
      response.abort(404);
    }
    return response.json(user);
  } catch(error) {
    next(error);
  }
};