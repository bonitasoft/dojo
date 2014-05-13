"use strict";

angular.module('bonitasoft.bbpmManagerUserList', ['bonitasoft.bbpmModel'])
    .controller('bbpmManagerUserListCtrl', [
        '$scope', '$http', 'userService',
        function ($scope, $http, userService) {
            userService.list({
                f: 'manager_id=' + $scope.userId
            }).success(function (users) {
                $scope.users = users;
                if ($scope.onLoad !== undefined) {
                    $scope.onLoad(users);
                }
                if ($scope.onSelectUser !== undefined && users.length > 0) {
                    $scope.onSelectUser(users[0]);
                }
            });
        }]).directive('bbpmManagerUserList', function () {
        return {
            restrict: 'E',
            controller: 'bbpmManagerUserListCtrl',
            scope: {
                userId: '=',
                onSelectUser: '=?',
                onLoad: '=?'
            },
            templateUrl: 'app/directives/bbpmManagerUserList/bbpmManagerUserList-tpl.html'
        };
    });

