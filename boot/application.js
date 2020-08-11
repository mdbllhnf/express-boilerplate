'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const translation = require('@services/translation');
const attachHelpers = require('@middlewares/attach-helpers');
const handleErrors = require('@middlewares/handle-errors');
const routers = require('@routers/all');
const {ENV} = require('@configs/server');

const application = express();

if (ENV === 'production') {
  application.set('etag', false);
  application.set('x-powered-by', false);
}

application.use(express.json());
application.use(cookieParser());
application.use(translation.init);
application.use(attachHelpers);
application.use('/', routers);
application.use(handleErrors);

module.exports = application;