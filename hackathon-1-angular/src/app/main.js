'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute', 'routes', 'admin','BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login', 'teammanager', 'processes'])

    .value('loggedUser', {username:''})

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

