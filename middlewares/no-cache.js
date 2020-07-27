'use strict';

module.exports = function(request, response, next) {
    response
        .header('Cache-Control', 'no-cache, no-store, must-revalidate')
        .header('Pragma', 'no-cache')
        .header('Expire', '0');

    next();
};