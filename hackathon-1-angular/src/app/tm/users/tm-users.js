/**
 * Created by nicolas on 08/05/14.
 */
angular.module('tm-users', ['services.crud', 'directives.crud', 'resources.users', 'login'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Users', 'tm')
            .whenList({
                users: ['Users', 'loggedUser', function(Users, loggedUser) { return Users.getTeamMembers(loggedUser.userid); }]
            })
            .whenEdit({
                user:['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            });
    }])

    .controller('tmUsersListCtrl',['$scope', 'crudListMethods', '$http', 'loggedUser', 'users', function($scope, crudListMethods, $http, loggedUser, users){
        $scope.users = users;

        angular.extend($scope, crudListMethods('/tm/users'));

    }])

    .controller('tmUsersEditCtrl', ['$scope', '$location', '$filter', 'user', function ($scope, $location, $filter, user) {

        $scope.user = user;
        $scope.password = user.password;

        $scope.cancelEdit = function() {
            $location.path('/tm/users');
        };

        $scope.onSave = function (user) {
            $location.path('/tm/users');
        };

        $scope.onError = function() {
            console.log("Unable to save user!");
        };

    }])

;