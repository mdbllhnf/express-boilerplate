'use strict';

const express = require('express');
const router = express.Router();

const userController = require('@controllers/v1/users');

router.get('/users', userController.index);
router.get('/users/:id', userController.show);

module.exports = router;