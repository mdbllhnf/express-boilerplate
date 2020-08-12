'use strict';

const express = require('express');

const translation = require('@services/translation');
const attachHelpers = require('@middlewares/attach-helpers');
const handleErrors = require('@middlewares/handle-errors');
const routers = require('@routers/all');

const app = express();

app.set('etag', false);
app.set('x-powered-by', false);

app.use(express.json());
app.use(translation.init);
app.use(attachHelpers);
app.use('/', routers);
app.use(handleErrors);

module.exports = app;