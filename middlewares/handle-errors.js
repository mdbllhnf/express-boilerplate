'use strict';

const logger = require('@services/logger');
const { makeLogMessage } = require('@utility/generators');

module.exports = (error, request, response, next) => {
    if(response.headersSent) {
        return next(error);
    }
    
    logger.general.error(makeLogMessage([
        `Request from ${request.ip} to ${request.method} ${request.path}.`,
        error.stack || error,
    ]));

    response
        .status(500)
        .json({
            message: 'Internal Server Error',
        });
};