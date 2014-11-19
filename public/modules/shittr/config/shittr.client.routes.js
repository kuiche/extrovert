'use strict';

// Setting up route
angular.module('shittr').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// Home state routing
		$stateProvider.
		state('shittr', {
			url: '/shittr',
			templateUrl: 'modules/shittr/views/shittr.client.view.html'
		});
	}
]);