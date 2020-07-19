'use strict';

require('module-alias/register');

const logger = require('@services/logger');

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cookie-parser')());

app.set('etag', false);

app.use('/', require('@routers/welcome'));
app.all('*', require('@controllers/not-found').index);

const { port } = require('@configs/app');
app.listen(port, () => {
    logger.info(`Server running and listening on port ${port}...`);
});