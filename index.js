'use strict';

require('dotenv/config');
require('module-alias/register');

global.HttpError = require('@errors/http-error');

require('@root/server');