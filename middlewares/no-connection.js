'use strict';

module.exports = (request, response, next) => {
    response
        .header('Connection', 'close');

    next();
};