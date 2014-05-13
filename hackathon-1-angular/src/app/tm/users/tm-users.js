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
                users: ['Users', '$route', function(Users, $route) { return Users.getTeamMembers($route.current.params.itemId); }],
                user:['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            });
    }])

    .controller('tmUsersListCtrl',['$scope', 'crudListMethods', '$http', 'loggedUser', 'users', function($scope, crudListMethods, $http, loggedUser, users){
        $scope.users = users;

        angular.extend($scope, crudListMethods('/tm/users'));

    }])

    .controller('tmUsersEditCtrl', ['$scope', 'crudListMethods', '$location', '$filter', 'user', 'users', function ($scope, crudListMethods, $location, $filter, user, users) {
        $scope.users = users;
        $scope.user = user;
        $scope.password = user.password;

        angular.extend($scope, crudListMethods('/tm/users'));

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