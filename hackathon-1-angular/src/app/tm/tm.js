'use strict';

/* Administration features Module declaration */
angular.module('tm', ['tm-users'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/tm", {templateUrl: 'app/tm/tm-tpl.html'});
    }]);
