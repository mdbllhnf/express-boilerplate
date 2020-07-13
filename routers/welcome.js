'use strict';

const express = require('express');
const router = express.Router();

const Controller = require('@controllers/welcome');

router.get('/', Controller.index);

module.exports = router;