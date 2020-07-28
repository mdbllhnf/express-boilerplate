'use strict';

exports.getErrorStack = function(error) {
  return (error && error.stack ? error.stack : error) || 'Unspecified error';
};