'use strict';

exports.index = async (request, response) => {
    const visitor = request.query.visitor || 'Anonymous';

    const responseBody = {
        message: `Hey ${visitor} ! Welcome to Express Boilerplate.`,
    }
    
    response
        .status(200)
        .json(responseBody);
};