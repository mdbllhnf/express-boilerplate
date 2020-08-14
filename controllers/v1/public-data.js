'use strict';

const publicDataModel = require('@models/public-data');

exports.index = async function(request, response, next) {
  try {
    const allPublicData = await publicDataModel.getAll();
    return response
      .status(200)
      .json(allPublicData);
  } catch(error) {
    next(error);
  }
};

exports.show = async function(request, response, next) {
  try {
    const publicDataId = parseInt(request.params.id);
    if (!publicDataId) {
      response.abort(400);
    }
    const publicData = await publicDataModel.getById(publicDataId);
    if (!publicData) {
      response.abort(404);
    }
    return response.json(publicData);
  } catch(error) {
    next(error);
  }
};