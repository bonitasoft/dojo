'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login'])

    .value('loggedUser', {username:''})
    .value('activeProfile', '')


    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({template:"<div>404 :-)</div>"});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', 'activeProfile', function($scope, $http, loggedUser, activeProfile){
        $scope.loggedUser = loggedUser;
        $scope.activeProfile = activeProfile;
        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser.username = data.user_name;
            $scope.activeProfile = '';
        });
    }]);

