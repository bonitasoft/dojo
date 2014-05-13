"use strict";

angular.module('bonitasoft.manager.processes', [
    'bonitasoft.bbpmManagerUserList',
    'bonitasoft.bbpmEditUser',
    'bonitasoft.bbpmProcessList',
    'bonitasoft.bbpmStartFor',
    'bonitasoft.manager.processes.startfor'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/processes", {
            templateUrl: 'app/manager/processes/processes-tpl.html',
            controller: 'processesCtrl'
        });
    }])

    .controller('processesCtrl', ['$scope', function ($scope) {
        $scope.selectProcess = function (process) {
            $scope.selectedProcess = process;
        }
    }]);

