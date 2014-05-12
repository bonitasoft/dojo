'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login', 'teammanager'])

    .value('loggedUser', {username:''})

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/login", {templateUrl: 'app/login/login-tpl.html'});
        $routeProvider.otherwise({redirectTo:'/admin/users'});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', function($scope, $http, loggedUser){
        $scope.loggedUser = loggedUser;
        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser=data;
            $scope.loggedUser.username = data.user_name;
            $http({
                method: 'GET',
                url: 'bonita/API/identity/user/'+data.user_id
            }).success(function(userData){
                $scope.loggedUser.userData=userData;
                $scope.loggedUser.display_name=userData.firstname+' '+userData.lastname;
            })



        });
    }]);

