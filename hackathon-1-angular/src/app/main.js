'use strict';

/* Main Module declaration */

angular.module('BonitaBPM6Portal', ['ngRoute', 'bonitasoft.bbpmManager', 'directives.gravatar'])

    .value('loggedUser', {
        username: ''
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/manager/users'});
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

