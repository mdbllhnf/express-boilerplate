'use strict';

require('module-alias/register');

const logger = require('@services/logger');

const express = require('express');
const app = express();

app.set('etag', false);
app.set('x-powered-by', false);

app.use(express.json());
app.use(require('cookie-parser')());
app.use('/', require('@routers/all'));

const { port } = require('@configs/app');
app.listen(port, () => {
    logger.info(`Server running and listening on port ${port}...`);
});