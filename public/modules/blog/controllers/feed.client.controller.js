'use strict';

angular.module('blog').controller('FeedController', ['$scope', 'FeedService', function($scope, Feed) {
    Feed.getFeedContent('http://extrovert.io/blog/rss/').then(function(res) {
        $scope.feeds = res.data.responseData.feed.entries;
    });
}]);
