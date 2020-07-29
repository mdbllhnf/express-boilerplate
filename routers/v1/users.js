'use strict';

const express = require('express');
const router = express.Router();

const userController = require('@controllers/v1/users');

router.route('/users')
  .get(userController.index);

module.exports = router;