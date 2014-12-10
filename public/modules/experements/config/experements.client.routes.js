'use strict';

// Setting up route
angular.module('experements').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Home state routing
        $stateProvider.
        state('experements', {
            url: '/experements',
            templateUrl: 'modules/experements/views/list.client.view.html'
        });
    }
]);