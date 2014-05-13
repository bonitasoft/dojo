"use strict";

angular.module('bonitasoft.manager.users', [
    'bonitasoft.bbpmManagerUserList',
    'bonitasoft.bbpmEditUser',
    'bonitasoft.bbpmModel'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/users/:id*", {
            templateUrl: 'app/manager/users/users-tpl.html',
            controller: 'usersCtrl'
        });
    }])

    .controller('usersCtrl', [
        '$scope', 'loggedUser', '$routeParams', '$location', "userService",
        function ($scope, loggedUser, $routeParams, $location, userService) {

            function buildBreadCrumbs(userIds) {
                var breadCrumbs = [];
                for(var i = 0; i < userIds.length; i++) {
                    breadCrumbs.push({
                        name: userIds[i],
                        url: userIds.slice(0, i + 1).join("/")
                    });
                }
                return breadCrumbs;
            }

            var userIds = $routeParams.id || loggedUser.id;
            userIds = userIds.split("/");
            $scope.breadCrumbs = buildBreadCrumbs(userIds);
            $scope.userId = userIds[userIds.length - 1];
            $scope.location = $location;
            
            $scope.updateEditView = function (user) {
                $scope.selectedUser = user;
                $scope.isManager = false;
                userService.list({
                    f: 'manager_id=' + user.id
                }).success(function (users) {
                    $scope.isManager = users.length > 0;
                });
            }
        }]);

