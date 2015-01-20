'use strict';

// Setting up route
angular.module('experiments').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Home state routing
        $stateProvider.
        state('experiments', {
            url: '/experiments',
            templateUrl: 'modules/experiments/views/list.client.view.html'
        });
    }
]);
