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
            $scope.activeProfile = '';
            console.log("main.success");
            console.log(loggedUser);
        }).error(function() {
            $scope.loggedUser.username = '';
            $scope.activeProfile = '';
            console.log("main.error");
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

