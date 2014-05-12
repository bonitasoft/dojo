'use.strict'
angular.module('admin-tm', ['bonitasoft.bbpmManagerUserList'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/admin/tm", {
            templateUrl: 'app/admin/tm/tm-users-list-tpl.html',
            controller: 'tmUsersListCtrl'
        });
    }])


    .controller('tmUsersListCtrl', ['$scope','loggedUser', function ($scope, loggedUser) {
       $scope.loggedUser = loggedUser;
    }]);

