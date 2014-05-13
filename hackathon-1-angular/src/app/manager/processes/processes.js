"use strict";

angular.module('bonitasoft.manager.processes', [
    'bonitasoft.bbpmManagerUserList',
    'bonitasoft.bbpmEditUser',
    'bonitasoft.bbpmProcessList',
    'bonitasoft.bbpmStartFor',
    'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/processes/:userId", {
            templateUrl: 'app/manager/processes/processes-tpl.html',
            controller: 'processesCtrl'
        });
    }])

    .controller('processesCtrl', ['$scope', '$modal','$routeParams', function ($scope, $modal, $routeParams) {
        $scope.startProcess = function (process) {
            $scope.open(process, 'lg');
        };

        $scope.userId = $routeParams.userId;

        $scope.open = function (process, size) {
            $modal.open({
                templateUrl: 'startProcess-tpl.html',
                controller: function ($scope, $modalInstance, process, userId) {
                    $scope.process = process;
                    $scope.userId = userId;

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: size,
                resolve: {
                    process: function () {
                        return process;
                    },
                    userId: function () {
                        return $scope.userId;
                    }
                }
            });
        };
    }]);

