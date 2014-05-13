'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin', 'tm','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login'])


    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({template:"<div>404 :-)</div>"});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', 'authenticationService', function($scope, $http, loggedUser, authenticationService) {
        $scope.loggedUser = loggedUser;

        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser.username = data.user_name;
            $scope.loggedUser.userid = data.user_id;
            console.log("main.js.success. LoggedUser:");
            console.log(loggedUser);
        }).error(function() {
            $scope.loggedUser.username = '';
            $scope.loggedUser.userid = '';
            console.log("main.js.error. LoggedUser:");
            console.log(loggedUser);
        });

        $scope.getLoggedUser = function() {
            return $scope.loggedUser;
        }

        $scope.logout = function() {
            authenticationService.logout();
        }
    }]
);

