"use strict";

angular.module('bonitasoft.bbpmProcessList', [])
    .controller('bbpmProcessListCtrl', ['$scope', '$http', 'loggedUser', function ($scope, $http, loggedUser) {
        $http({
            method: 'GET', url: 'bonita/API/bpm/process', params: {
                p: '0',
                c: '10',
                o: 'displayName ASC',
                f: 'user_id=' + $scope.forUser || loggedUser.id

            }
        }).success(function (processes) {
            $scope.processes = processes;
        });

    }]).directive('bbpmProcessList', function () {
        return {
            restrict: 'E',
            controller: 'bbpmProcessListCtrl',
            scope: {
                profile: '=?',
                onSelectProcess: '=?',
                onStartFor: '=?',
                forUser: '=?'
            },
            templateUrl: 'app/directives/bbpmProcessList/bbpmProcessList-tpl.html'
        };
    });

