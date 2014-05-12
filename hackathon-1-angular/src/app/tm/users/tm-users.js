/**
 * Created by nicolas on 08/05/14.
 */
angular.module('tm', [])
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

    .controller('TmCtrl',['$scope', '$http', 'loggedUser', 'activeProfile', function($scope, $http, loggedUser, activeProfile){


}]);