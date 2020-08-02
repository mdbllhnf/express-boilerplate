'use strict';

const logger = require('@services/logger');
const {makeLogMessage} = require('@helpers/generators');
const {getErrorStack} = require('@helpers/errors');

process.on('uncaughtException', (error) => {
  logger.general.error(makeLogMessage([
    'Reached uncaughtException',
    getErrorStack(error),
  ]));
  process.exit(1);
});
process.on('unhandledRejection', (error) => {
  logger.general.error(makeLogMessage([
    'Reached unhandledRejection',
    getErrorStack(error),
  ]));
  process.exit(1);
});
process.on('exit', (code) => {
  logger.server.error(makeLogMessage([
    `Process exit with code ${code}.`,
  ]));
});

const application = require('@root/application');
const {PORT, HOST} = require('@configs/server');

application.listen(PORT, HOST, () => {
  logger.server.info(makeLogMessage([
    `Starting a server on host ${HOST} and port ${PORT}.`,
  ]));
}).on('error', (error) => {
  logger.server.error(makeLogMessage([
    `Unable to start a server on host ${HOST} and port ${PORT}.`,
    getErrorStack(error),
  ]));
});