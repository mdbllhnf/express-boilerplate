'use strict';

exports.index = function(request, response, next) {
  response.abort(404);
};