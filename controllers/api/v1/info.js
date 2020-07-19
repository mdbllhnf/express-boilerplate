'use strict';

exports.index = (request, response) => {
    response
        .status(200)
        .json({
            version: 1,
        });
};