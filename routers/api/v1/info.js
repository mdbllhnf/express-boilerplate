'use strict';

const express = require('express');
const router = express.Router();

const Controller = require('@controllers/api/v1/info');

router.route('/info')
    .get(Controller.index);

module.exports = router;