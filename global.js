'use strict';

global.UNCAUGHT_FATAL_EXCEPTION = 1;

global.HTTP_ERROR_SLUG = {
  400: 'bad-request',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'not-found',
  429: 'too-many-requests',
  500: 'internal-server-error',
  503: 'service-unavailable',
};

global.HttpError = require('@errors/http-error');

global.logger = require('@services/logger');