'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin', 'tm','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login'])

    .value('activeProfile', '')


    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({template:"<div>404 :-)</div>"});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', 'activeProfile', 'authenticationService', function($scope, $http, loggedUser, activeProfile, authenticationService) {
        $scope.loggedUser = loggedUser;
        $scope.activeProfile = activeProfile;

        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser.username = data.user_name;
            $scope.loggedUser.userid = data.user_id;
            $scope.activeProfile = '';
            console.log("main.js.success. LoggedUser:");
            console.log(loggedUser);
        }).error(function() {
            $scope.loggedUser.username = '';
            $scope.loggedUser.userid = '';
            $scope.activeProfile = '';
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

