"use strict";

angular.module('bonitasoft.manager.processes.startfor', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/manager/processes/startfor", {
            templateUrl: 'app/manager/processes/startFor-tpl.html',
            controller: 'usersCtrl'
        });
    }]);

