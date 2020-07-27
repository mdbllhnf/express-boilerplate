'use strict';

const logger = require('@services/logger');
const { makeLogMessage } = require('@utility/generators');
const { getErrorStack } = require('@utility/errors');

module.exports = function(error, request, response, next) {
    logger.general.error(makeLogMessage([
        `Request from ${request.ip} to ${request.method} ${request.path}.`,
        getErrorStack(error),
    ]));

    response
        .status(500)
        .json({
            message: 'Internal Server Error',
        });
};