'use strict';

const HttpError = require('@errors/http-error');

module.exports = function(request, response, next) {
  response.abort = function(status, message) {
    next(new HttpError(status, message));
  };

  next();
};