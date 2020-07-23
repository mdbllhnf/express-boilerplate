'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const logger = require('@services/logger');
const routers = require('@routers/all');
const handleErrors = require('@middlewares/handle-errors');

const { makeLogMessage } = require('@utility/generators');

const { port, host } = require('@configs/app');

const app = express();

app.set('case sensitive routing', true);
app.set('etag', false);
app.set('x-powered-by', false);
app.set('trust proxy', true);
    
app.use(express.json());
app.use(cookieParser());
app.use('/', routers);
app.use(handleErrors);

app.listen(port, host, () => {
    logger.general.info(makeLogMessage([
        `Starting the app on host ${host} and port ${port}.`,
    ]));
}).on('error', (error) => {
    logger.general.info(makeLogMessage([
        `Unable to start the app on host ${host} and port ${port}.`,
        error.stack || error,
    ]));
});

module.exports = app;