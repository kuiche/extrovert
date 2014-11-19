'use strict';

var shittr = require('../../app/controllers/shittr.server.controller');

/**
 * The routes for shittr 
 */
module.exports = function (app) {
	app.route('/shittr/posts')
		.get(shittr.posts.list)
		.post(shittr.posts.create)
	;
};