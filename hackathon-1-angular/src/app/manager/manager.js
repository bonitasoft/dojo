"use strict";

angular.module('bonitasoft.bbpmManager', ['bonitasoft.bbpmManagerUserList', 'bonitasoft.bbpmEditUser'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/users", {
            templateUrl: 'app/manager/manager-tpl.html',
            controller: 'tmUsersListCtrl'
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
    .controller('tmUsersListCtrl', ['$scope', 'loggedUser', function ($scope, loggedUser) {
        $scope.loggedUser = loggedUser;
    }]);

