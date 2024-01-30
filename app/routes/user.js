const { users } = require('../controller');

var router = require('express').Router();

module.exports = app => {
	router.post('/users', users.create);
	router.get('/users', users.findAll);

	app.use('/api', router);
};