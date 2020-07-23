'use strict';

require('module-alias/register');

const express = require('express');
const cookieParser = require('cookie-parser');

const logger = require('@services/logger');
const routers = require('@routers/all');

const {
    port,
    host,
} = require('@configs/app');

const app = express();

app.set('case sensitive routing', true);
app.set('etag', false);
app.set('x-powered-by', false);
app.set('trust proxy', true);
    
app.use(express.json());
app.use(cookieParser());
app.use('/', routers);

app.listen(port, host, () => {
    logger.info(`Starting the app on ${host}:${port}, PID ${process.pid}`);
}).on('error', (error) => {
    logger.error(`An error has occurred while trying to start the app on ${host}:${port}, PID ${process.pid}, ${error}.`);
    process.exit(1);
});