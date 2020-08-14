'use strict';

const express = require('express');

const notFoundController = require('@controllers/not-found');
const publicDataRouter = require('@routers/v1/public-data');
const privateDataRouter = require('@routers/v1/private-data');

const router = express.Router();

router.use('/v1', [
  publicDataRouter,
  privateDataRouter,
]);

router.all('*', notFoundController.index);

module.exports = router;