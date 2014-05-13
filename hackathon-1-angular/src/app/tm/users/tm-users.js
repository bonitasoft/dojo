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

    .controller('tmUsersListCtrl',['$scope', '$http', 'loggedUser', 'users', function($scope, $http, loggedUser, users){
        $scope.users = users;
    }])
;