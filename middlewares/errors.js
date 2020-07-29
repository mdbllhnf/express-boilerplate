'use strict';

const logger = require('@services/logger');
const {makeLogMessage} = require('@helpers/generators');
const {getErrorStack} = require('@helpers/errors');
const {HTTP_ERROR_MESSAGE} = require('@configs/http');

module.exports = function(error, request, response, next) {
  if (error instanceof HttpError) {
    const {status, message} = error;
    makeErrorResponse(status, message || HTTP_ERROR_MESSAGE[status]);
  } else {
    const status = 500;
    makeErrorResponse(status, HTTP_ERROR_MESSAGE[status]);
    report(error);
  }

  function makeErrorResponse(status, message) {
    return response
      .status(status)
      .json({
        message: message ? request.trans(`http.${message}`) : '',
      });
  }

  function report(error) {
    logger.request.error(makeLogMessage([
      `Request from ${request.ip} to ${request.method} ${request.path}.`,
      getErrorStack(error),
    ]));
  }
};