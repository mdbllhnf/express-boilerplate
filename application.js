'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const routers = require('@routers/all');
const handleErrors = require('@middlewares/handle-errors');
const { env } = require('@configs/app');

const application = express();

if(env === 'production') {
    application.set('etag', false);
    application.set('x-powered-by', false);
    application.set('trust proxy', true);
}
    
application.use(express.json());
application.use(cookieParser());
application.use('/', routers);
application.use(handleErrors);

module.exports = application;