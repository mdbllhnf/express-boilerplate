'use strict';

const app = require('@boot/app');
const {PORT, HOST} = require('@configs/server');

app.listen(PORT, HOST, () => {
  logger.general.info(logger.makeMessage([
    `Starting a server on host ${HOST} and port ${PORT}.`,
  ]));
}).on('error', (error) => {
  logger.general.error(logger.makeMessage([
    `Unable to start a server on host ${HOST} and port ${PORT}.`,
    error.stack || error,
  ]));
  process.exit(UNCAUGHT_FATAL_EXCEPTION);
});