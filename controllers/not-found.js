'use strict';

exports.index = (request, response) => {
    response
        .status(404)
        .json({
            message: 'Not Found',
        });
};