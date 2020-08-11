'use strict';

const os = require('os');

const {MAINTAINER_SECRET} = require('@configs/app');

exports.index = function(request, response, next) {
  const {secret} = request.query;
  if (secret !== MAINTAINER_SECRET) {
    response.abort(401, request.trans('alert.wrong-maintainer-secret'));
  }
  response
    .status(200)
    .json({
      totalmem: os.totalmem(),
      freemem: os.freemem(),
      cpus: os.cpus(),
    });
};