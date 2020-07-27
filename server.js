'use strict';

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

const application = require('@root/application');
const { port, host } = require('@configs/app');

application.listen(port, host, () => {
    logger.general.info(makeLogMessage([
        `Starting the server on host ${host} and port ${port}.`,
    ]));
}).on('error', (error) => {
    logger.general.info(makeLogMessage([
        `Unable to start the server on host ${host} and port ${port}.`,
        getErrorStack(error),
    ]));
});