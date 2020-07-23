'use strict';

const express = require('express');
const router = express.Router();

router.use('/api/1', [
    require('@routers/api/v1/info'),
]);

router.all('*', require('@controllers/not-found').index);

module.exports = router;