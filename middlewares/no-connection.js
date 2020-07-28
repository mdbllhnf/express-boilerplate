'use strict';

module.exports = function(request, response, next) {
  response
    .header('Connection', 'close');

  next();
};