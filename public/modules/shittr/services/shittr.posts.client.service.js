'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shittr').factory('Posts', ['$resource',
	function($resource) {
		return $resource('shittr/posts/:postId', {
			PostId: '@_id'
		}, {});
	}
]);