'use strict';

module.exports = class HttpError extends Error {
  constructor(status = 500, message = '') {
    super(message);
    this.status = status;
  }
};