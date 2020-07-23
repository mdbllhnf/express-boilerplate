'use strict';

require('module-alias/register');

const logger = require('@services/logger');

const { makeLogMessage } = require('@utility/generators');

process.on('uncaughtException', (error) => {
    logger.general.error(makeLogMessage([
        error.stack || error,
    ]));
});
process.on('unhandledRejection', (error) => {
    logger.general.error(makeLogMessage([
        error.stack || error,
    ]));
});

require('@root/app');