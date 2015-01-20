'use strict';

angular.module('experiments').controller('ExperementController', ['$scope', '$stateParams', '$location', 'Authentication', 'Posts',
    function($scope, $stateParams, $location, Authentication, Posts) {
        $scope.authentication = Authentication;
        $scope.user = Authentication.user;
    }
]);
