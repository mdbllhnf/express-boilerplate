'use strict';

require('module-alias/register');

const logger = require('@services/logger');

const { makeLogMessage } = require('@utility/generators');
const { getErrorStack } = require('@utility/errors');

process.on('uncaughtException', (error) => {
    logger.general.error(makeLogMessage([
        'Reached uncaughtException',
        getErrorStack(error),
    ]));
});
process.on('unhandledRejection', (error) => {
    logger.general.error(makeLogMessage([
        'Reached unhandledRejection',
        getErrorStack(error),
    ]));
});

require('@root/app');