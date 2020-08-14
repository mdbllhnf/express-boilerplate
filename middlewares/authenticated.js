'use strict';

module.exports = function(request, response, next) {
  response.abort(401);
}