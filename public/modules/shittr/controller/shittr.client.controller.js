'use strict';

angular.module('shittr').controller('ShittrController', ['$scope', '$stateParams', '$location', 'Authentication', 'Posts',
	function($scope, $stateParams, $location, Authentication, Posts) {
		$scope.authentication = Authentication;
        // Redirect to login
        if (!$scope.authentication.user) $location.path('/signin');
        $scope.user = Authentication.user;

		$scope.find = function() {
			$scope.posts = Posts.query();
		};

		$scope.create = function() {
			var article = new Posts({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				// Refresh
				$scope.find();
				$scope.error = null;
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);