const { auths } = require('../controller');

var router = require('express').Router();

module.exports = app => {
	router.post('/login', auths.login);
	// router.get('/recovery-password', auths.findAll);

	app.use('/api', router);
};