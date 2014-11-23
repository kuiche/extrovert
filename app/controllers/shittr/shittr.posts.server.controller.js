'use strict';

var mongoose = require('mongoose'),
	Post = mongoose.model('Post'),
	errorHandler = require('../errors.server.controller'),
	_ = require('lodash'),
	FB = require('fb')
;

/**
 * Lists all posts
 */
exports.list = function (req, res) {
	Post.find().sort('-created').populate('user', 'displayName').exec(function(err, articles) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(articles);
		}
	});
};

/**
 * Create a post
 */
exports.create = function(req, res) {
	if(!req.body.content) return res.status(400).send({
		message: 'Content is required to post'
	});


	var article = new Post(req.body),
		accessToken = req.user.additionalProvidersData.facebook.accessToken
	;

	FB.setAccessToken(accessToken);
	FB.apiAsync('me/feed', 'post', {
		message: req.body.content
	}).catch(function(data) {
		console.log(data);
	});

	article.user = req.user;

	article.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(article);
		}
	});
};