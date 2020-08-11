'use strict';

const express = require('express');

const performanceController = require('@controllers/performance');
const notFoundController = require('@controllers/not-found');
const usersRouter = require('@routers/v1/users');

const router = express.Router();

router.get('/performance', performanceController.index);

router.use('/v1', [
  usersRouter,
]);

router.all('*', notFoundController.index);

module.exports = router;