'use strict';

angular.module('blog').service('FeedService', ['$http', function($http) {
    return {
        getFeedContent: function(url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
}]);
