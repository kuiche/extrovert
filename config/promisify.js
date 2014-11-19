'use strict';

/**
 * Module dependencies.
 */
var B = require('bluebird'),
	FB = require('fb');

/**
 * Promisify everything.
 */
module.exports = function() {
	B.promisifyAll(FB);
};