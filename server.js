'use strict';

require('module-alias/register');

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cookie-parser')());

app.set('etag', false);

app.use('/', require('@middlewares/headers'));

app.use('/', require('@routers/welcome'));
app.get('*', require('@controllers/not-found').index);

const { port } = require('@configs/app');
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`);
});