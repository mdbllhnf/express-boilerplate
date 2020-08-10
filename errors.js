'use strict';

process.on('uncaughtException', (error) => {
  logger.general.error(logger.makeMessage([
    'Process reached uncaughtException',
    error.stack || error,
  ]));
  process.exit(UNCAUGHT_FATAL_EXCEPTION);
});

process.on('unhandledRejection', (error) => {
  logger.general.error(logger.makeMessage([
    'Process reached unhandledRejection',
    error.stack || error,
  ]));
  process.exit(UNCAUGHT_FATAL_EXCEPTION);
});

process.on('exit', (code) => {
  logger.general.info(logger.makeMessage([
    `Process exit with the code ${code}.`,
  ]));
});