angular.module('teammanager-users', ['services.crud', 'directives.crud', 'directives.gravatar','resources.users', 'admin-users-edit-uniqueUsername'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Users', 'teammanager')
            .whenList({
                users: ['Users', function(Users) { return Users.all(); }]
            })
            /*.whenNew({
                user: ['Users', function(Users) { return new Users(); }]
            })*/
            .whenEdit({
                user:['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            });
    }]);