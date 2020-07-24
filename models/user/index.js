'use strict';

const { bindModels } = require('@configs/binds');

module.exports = require(`@models/user/user-${bindModels.user}`)