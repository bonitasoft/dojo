'use strict';

/* TM features Module declaration */
angular.module('tm', ['tm-users', 'tm-processes'])
    .controller('tabsCtrl',['$scope', '$route', function($scope, $route){

        $scope.currentUserId = $route.current.params.itemId;
    }]);
