exports.asycHandle = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
};


exports.handleError = (res, error, status) => {
    return res.status(status).send({
        message: error.message ? error.message : error,
        error: true
    })
};


exports.handleResponse = (res, data, message, status) => {
    return res.status(status).send({
        data: data,
        message: message,
        error: false
    })
};