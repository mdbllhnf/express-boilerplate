'use strict';

exports.getErrorStack = (error) =>
    (error && error.stack ? error.stack : error) || 'Unspecified error';