'use strict';

module.exports = function(error, request, response, next) {
  if (error instanceof HttpError) {
    const {status, message} = error;
    response.message(
      status,
      message || request.trans(`http.${HTTP_ERROR_SLUG[status]}`)
    );
    return;
  }

  const status = 500;
  response.message(
    status,
    request.trans(`http.${HTTP_ERROR_SLUG[status]}`)
  );
  logger.request.error(logger.makeMessage([
    `Request from ${request.ip} to ${request.method} ${request.path}.`,
    error.stack || error,
  ]));
};