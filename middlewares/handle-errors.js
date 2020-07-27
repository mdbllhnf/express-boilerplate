'use strict';

const logger = require('@utility/logger');
const { makeLogMessage } = require('@helpers/generators');
const { getErrorStack } = require('@helpers/errors');

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