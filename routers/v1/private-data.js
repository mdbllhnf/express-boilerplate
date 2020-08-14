'use strict';

const express = require('express');
const router = express.Router();

const privateDataController = require('@controllers/v1/private-data');
const authenticated = require('@middlewares/authenticated');

router.use('/private-data', authenticated);

router.get('/private-data', privateDataController.index);
router.get('/private-data/:id', privateDataController.show);

module.exports = router;