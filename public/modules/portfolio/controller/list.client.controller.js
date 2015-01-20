'use strict';

angular.module('portfolio').controller('PortfolioController', ['$scope', '$stateParams', '$location', 'Authentication', 'Posts',
    function($scope, $stateParams, $location, Authentication, Posts) {
        $scope.authentication = Authentication;
        $scope.user = Authentication.user;
    }
]);
