'use strict';

yeomanApp.controller('MainCtrl', function($scope, $http, Link) {

    $scope.links = Link.query();

    $scope.addLink = function(url) {
        var newLink = new Link({url: url, score: 0});
        newLink.$save();
        $scope.links.push(newLink);
        $scope.url = null;
    }

    $scope.up = function(link) {
        link.score++;
        link.$update();
    }

    $scope.down = function(link) {
        link.score--;
        link.$update();
    }

});
