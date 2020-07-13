'use strict';

exports.index = async (request, response) => {
    const responseBody = {
        message: 'Not Found',
    }
    
    response
        .status(404)
        .json(responseBody);
};