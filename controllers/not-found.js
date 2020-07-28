'use strict';

module.exports = function(request, response) {
  response
    .status(404)
    .json({
      message: 'Not Found',
    });
};