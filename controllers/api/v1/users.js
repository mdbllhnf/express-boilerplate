'use strict';

const UserModel = require('@models/user');

exports.index = async (request, response, next) => {
    try {
        const allUsers = await UserModel.getAll();
        response
            .status(200)
            .json(allUsers);
    }
    catch(error) {
        next(error);
    }
};