'use strict';

angular.module('spellingWpProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.sortable',
    'ui.date'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
