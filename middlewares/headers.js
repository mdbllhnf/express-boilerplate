'use strict';

module.exports = (request, response, next) => {
    response
        .header('Cache-Control', 'no-store')
        .header('Connection', 'close');

    next();
};