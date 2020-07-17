'use strict';

const express = require('express');
const router = express.Router();

const Controller = require('@controllers/welcome');
const noCache = require('@middlewares/no-cache');
const noConnection = require('@middlewares/no-connection');

router.get('/', noCache, noConnection, Controller.index);

module.exports = router;