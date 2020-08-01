'use strict';

const express = require('express');

const notFoundController = require('@controllers/not-found');
const usersRouter = require('@routers/v1/users');

const router = express.Router();

router.use('/v1', [
  usersRouter,
]);

router.all('*', notFoundController.index);

module.exports = router;