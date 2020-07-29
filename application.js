'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const routers = require('@routers/all');
const handleRequestErrors = require('@middlewares/handle-request-errors');
const {ENV} = require('@configs/server');

const application = express();

if (ENV === 'production') {
  application.set('etag', false);
  application.set('x-powered-by', false);
  application.set('trust proxy', true);
}

application.use(express.json());
application.use(cookieParser());
application.use('/', routers);
application.use(handleRequestErrors);

module.exports = application;