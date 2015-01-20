'use strict';

// Setting up route
angular.module('portfolio').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // State routing
        $stateProvider.
        state('portfolio', {
            url: '/portfolio',
            templateUrl: 'modules/portfolio/views/list.client.view.html'
        });
    }
]);
