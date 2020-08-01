'use strict';

global.HttpError = require('@errors/http-error');

global.HTTP_ERROR_SLUG = {
  400: 'bad-request',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'not-found',
  429: 'too-many-requests',
  500: 'internal-server-error',
  503: 'service-unavailable',
};