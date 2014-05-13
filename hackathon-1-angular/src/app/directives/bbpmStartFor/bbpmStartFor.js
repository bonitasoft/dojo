"use strict";

angular.module('bonitasoft.bbpmStartFor', [])
    .controller('bbpmStartForCtrl', ['$scope', '$http', 'loggedUser', function ($scope, $http, loggedUser) {
        $http({
            method: 'GET', url: 'bonita/API/bpm/process', params: {
                p: '0',
                c: '10',
                o: 'displayName ASC',
                f: 'team_manager_id=' + loggedUser.id
            }
        }).success(function (processes) {
            $scope.processes = processes;
        });

        $scope.startFor = function() {
            ;
        }

    }]).directive('bbpmStartFor', function () {
        return {
            restrict: 'E',
            controller: 'bbpmStartForCtrl',
            scope: { processId: '=' },
            templateUrl: 'app/directives/bbpmStartFor/bbpmStartFor-tpl.html'
        };
    });

