'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login', 'teammanager', 'processes'])

    .value('loggedUser', {username:''})

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when("/teammanager/users", {templateUrl: 'app/teammanager/users.tpl.html', controller: 'listUsersCtrl'});
        $routeProvider.when("/teammanager/users/:id", {templateUrl: 'app/teammanager/users-edit-tpl.html', controller: 'editUserCtrl'});
        $routeProvider.when("/bpm/processes", {templateUrl: 'app/bpm/processes/processes-tpl.html', controller: 'ProcessesCtrl'});

        $routeProvider.when("/login", {templateUrl: 'app/login/login-tpl.html'});
        $routeProvider.otherwise({redirectTo:'/teammanager/users'});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', '$location', function($scope, $http, loggedUser, $location){
        $scope.loggedUser = loggedUser;
        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser.username = data.user_name;
            $scope.loggedUser.id = data.user_id;
        });

        $scope.logout = function() {

            $http({
                method: 'GET',
                url: 'bonita/logoutservice',
                data: { redirect: 'false'}
            } ).success(function(data, status, headers, config) {

                loggedUser.username = {};
                $location.path('/login');
            });

        }
    }]);

