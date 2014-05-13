'use strict';

/* Administration features Module declaration */
angular.module('admin', ['admin-users','admin-groups'])

.config(
    ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/admin", {templateUrl: 'app/admin/admin-tpl.html'});
    }])

    .controller('AdminCtrl',['$scope', '$http', 'loggedUser', function($scope, $http, loggedUser) {

    }])
;