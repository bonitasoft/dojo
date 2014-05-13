'use strict';

angular.module('BonitaBPM6Portal', ['ngRoute', 'bonitasoft.manager', 'directives.gravatar'])

    .value('loggedUser', {
        username: ''
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: 'app/home-tpl.html'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }])

    .controller('MainCtrl', ['$scope', '$http', 'loggedUser', function ($scope, $http, loggedUser) {
        $scope.loggedUser = loggedUser;
        $http({
            method: 'GET',
            url: 'bonita/API/system/session/unusedid'
        }).success(function (data) {
            $scope.loggedUser.username = data.user_name;
            $scope.loggedUser.id = data.user_id;
        });
    }]);

