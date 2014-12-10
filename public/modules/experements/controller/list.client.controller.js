'use strict';

angular.module('experements').controller('ExperementController', ['$scope', '$stateParams', '$location', 'Authentication', 'Posts',
    function($scope, $stateParams, $location, Authentication, Posts) {
        $scope.authentication = Authentication;
        $scope.user = Authentication.user;
    }
]);