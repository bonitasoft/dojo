"use strict";

angular.module('bonitasoft.manager.processes', [
    'bonitasoft.bbpmManagerUserList',
    'bonitasoft.bbpmEditUser',
    'bonitasoft.bbpmProcessList',
    'bonitasoft.bbpmStartFor',
    'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/processes", {
            templateUrl: 'app/manager/processes/processes-tpl.html',
            controller: 'processesCtrl'
        });
    }])

    .controller('processesCtrl', ['$scope', '$modal', function ($scope, $modal) {
        $scope.startProcess = function (process) {
            $scope.open(process, 'lg');
        };

        $scope.open = function (process, size) {
            $modal.open({
                templateUrl: 'startProcess-tpl.html',
                controller: function ($scope, $modalInstance, process) {
                    $scope.process = process;
                    console.log(process);
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: size,
                resolve: {
                    process: function () {
                        return process;
                    }
                }
            });
        };
    }]);

