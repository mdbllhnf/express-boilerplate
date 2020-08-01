'use strict';

exports.index = function(request, response) {
  return response.abort(404);
};