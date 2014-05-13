/**
 * Created by nicolas on 08/05/14.
 */
angular.module('tm-users', ['services.crud', 'directives.crud', 'resources.users'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Users', 'tm')
            .whenList({
                users: ['Users', function(Users) { return Users.all(); }]
            })
            .whenEdit({
                user:['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            });
    }])

    .controller('tmUsersListCtrl',['$scope', '$http', 'loggedUser', 'activeProfile', 'users', function($scope, $http, loggedUser, activeProfile, users){
        $scope.users = users;
    }])
;