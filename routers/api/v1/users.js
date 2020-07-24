'use strict';

const express = require('express');
const router = express.Router();

const Controller = require('@controllers/api/v1/users');

router.route('/users')
    .get(Controller.index);

module.exports = router;