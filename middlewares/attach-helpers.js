'use strict';

module.exports = function(request, response, next) {
  response.message = function(status, message) {
    return response
      .status(status)
      .json({message});
  }

  response.abort = function(status, message) {
    throw new HttpError(status, message);
  };

  next();
};