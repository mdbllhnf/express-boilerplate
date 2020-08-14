'use strict';

const privateDataModel = require('@models/private-data');

exports.index = async function(request, response, next) {
  try {
    const allPrivateData = await privateDataModel.getAll();
    return response
      .status(200)
      .json(allPrivateData);
  } catch(error) {
    next(error);
  }
};

exports.show = async function(request, response, next) {
  try {
    const privateDataId = parseInt(request.params.id);
    if (!privateDataId) {
      response.abort(400);
    }
    const privateData = await privateDataModel.getById(privateDataId);
    if (!privateData) {
      response.abort(404);
    }
    return response.json(privateData);
  } catch(error) {
    next(error);
  }
};