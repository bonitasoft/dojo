"use strict";

angular.module('bonitasoft.manager.users', ['bonitasoft.bbpmManagerUserList', 'bonitasoft.bbpmEditUser'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/users", {
            templateUrl: 'app/manager/users/users-tpl.html',
            controller: 'usersCtrl'
        });

        $routeProvider.when("/user/edit/:id", {
            template: '<bbpm-edit-user user="user"></bbpm-edit-user>',
            controller: ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
                $http({
                    method: 'GET',
                    url: 'bonita/API/identity/user/' + $routeParams.id})
                .success(function(user) {
                        $scope.user = user;
                });
            }]
        });
    }])
    .controller('usersCtrl', ['$scope', 'loggedUser', function ($scope, loggedUser) {
        $scope.loggedUser = loggedUser;
    }]);

