'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin', 'tm','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login'])


    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({template:"<div>404 :-)</div>"});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'authenticationService', function($scope, $http, authenticationService) {
        authenticationService.populateLoggedUser();

        $scope.getLoggedUser = function() {
            return $scope.loggedUser;
        }

        $scope.isLogged = function() {
            return authenticationService.isLogged();
        }

        $scope.logout = function() {
            authenticationService.logout();
        }
    }]
);

