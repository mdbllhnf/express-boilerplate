'use strict';

const express = require('express');

const router = express.Router();

router.use('/api/1', [
    require('@routers/api/v1/users'),
]);

router.all('*', require('@controllers/not-found'));

module.exports = router;