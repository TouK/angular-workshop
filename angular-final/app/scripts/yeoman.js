'use strict';

// Declare app level module which depends on filters, and services
var yeomanApp = angular.module('yeomanApp', ['link'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/main'
        });
}]);