'use strict';

exports.index = function(request, response) {
  response
    .status(404)
    .json({
      message: 'Not Found',
    });
};