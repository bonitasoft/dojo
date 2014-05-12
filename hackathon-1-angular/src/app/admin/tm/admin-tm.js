'use.strict'
angular.module('admin-tm', ['bonitasoft.bbpmManagerUserList', 'bonitasoft.bbpmEditUser'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/admin/tm", {
            templateUrl: 'app/admin/tm/tm-users-list-tpl.html',
            controller: 'tmUsersListCtrl'
        });

        $routeProvider.when("/user/edit/:id", {
            template: '<bbpm-edit-user user="user"></bbpm-edit-user>',
            //template: '<div>{{ user }}</div>',
            controller: ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
                $http({
                    method: 'GET',
                    url: 'bonita/API/identity/user/' + $routeParams.id})
                .success(function(user) {
                        $scope.user = user;
                });
            }]
        });
    }])


    .controller('tmUsersListCtrl', ['$scope', 'loggedUser', function ($scope, loggedUser) {
        $scope.loggedUser = loggedUser;
        $scope.edit = function(user) {
            $(".popup").show();
        };
    }]);

