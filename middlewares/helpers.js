'use strict';

module.exports = function(request, response, next) {
  response.abort = function(status, message) {
    next(new HttpError(status, message));
  };

  next();
};