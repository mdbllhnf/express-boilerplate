'use strict';

const express = require('express');

const notFoundController = require('@controllers/not-found')

const router = express.Router();
router.use('/api/1', [
  require('@routers/api/v1/users'),
]);
router.all('*', notFoundController.index);

module.exports = router;