'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$location', 'Posts',
	function($scope, Authentication, $location) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		// Redirect to login
		if (!$scope.authentication.user) $location.path('/signin');

		$scope.user = Authentication.user;
	}
]);