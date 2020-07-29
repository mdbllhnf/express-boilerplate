'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const translation = require('@services/translation');
const routers = require('@routers/all');
const errors = require('@middlewares/errors');
const {ENV} = require('@configs/server');

const application = express();

if (ENV === 'production') {
  application.set('etag', false);
  application.set('x-powered-by', false);
  application.set('trust proxy', true);
}

application.use(express.json());
application.use(cookieParser());
application.use(translation.init);
application.use('/', routers);
application.use(errors);

module.exports = application;