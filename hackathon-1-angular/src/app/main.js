'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute','admin', 'BonitaBPM6Portal.version', 'BonitaBPM6Portal.appVersion', 'login', 'tm'])

    .value('loggedUser', {username:'', id: '', isAdmin:false})

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/login", {templateUrl: 'app/login/login-tpl.html'});
        $routeProvider.otherwise({redirectTo:'/admin/users'});
    }])

    .controller('MainCtrl', ['$scope', '$http', '$location', 'loggedUser', function($scope, $http, $location, loggedUser){
        $scope.loggedUser = loggedUser;
        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function(data){
            $scope.loggedUser.username = data.user_name;
            $scope.loggedUser.id = data.user_id;
            $scope.location=$location;
            $scope.$on('$routeChangeSuccess', function() {
                //window.alert($location.path().indexOf("/admin") == 0);
                $scope.loggedUser.isAdmin = $location.path().indexOf("/admin") == 0;
            });
        });
    }]);

