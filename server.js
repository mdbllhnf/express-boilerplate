'use strict';

const logger = require('@utility/logger');
const {makeLogMessage} = require('@helpers/generators');
const {getErrorStack} = require('@helpers/errors');

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
const {PORT, HOST} = require('@configs/application');

application.listen(PORT, HOST, () => {
  logger.server.info(makeLogMessage([
    `Starting the server on host ${HOST} and port ${PORT}.`,
  ]));
}).on('error', (error) => {
  logger.server.info(makeLogMessage([
    `Unable to start the server on host ${HOST} and port ${PORT}.`,
    getErrorStack(error),
  ]));
});