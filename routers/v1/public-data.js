'use strict';

const express = require('express');
const router = express.Router();

const publicDataController = require('@controllers/v1/public-data');

router.get('/public-data', publicDataController.index);
router.get('/public-data/:id', publicDataController.show);

module.exports = router;