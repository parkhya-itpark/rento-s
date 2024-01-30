const { User } = require("../model");
const { handleError, handleResponse } = require('../utils/utils');

exports.create = async (req, res) => {
    try {
        const { first_name, last_name, mobile_number, email, username, password } = req.body;
        const data = { first_name, last_name, mobile_number, email, username, password }

        await User.create(data).then((user) => {
            handleResponse(res, user, 'User has been created.', 201)
        })
            .catch(error => {
                handleError(res, error, 404);
            })
    } catch (error) {
        handleError(res, error, 404);
    }
}


exports.findAll = async (req, res) => {
    try {
        await User.findAll().then((user) => {
            handleResponse(res, user, 'Users has been fetched.', 200);
        })
            .catch(error => {
                handleError(res, error, 404);
            })
    } catch (error) {
        handleError(res, error, 404);

    }
};