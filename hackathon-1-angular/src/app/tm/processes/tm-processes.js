angular.module('tm-processes', ['services.crud', 'directives.crud', 'resources.processes'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Processes', 'tm')
            .whenList({
                processes: ['Processes', 'loggedUser', function (Processes, loggedUser) {
                    return Processes.query({p:0,c:10000,o:'displayName ASC',f:'team_manager_id=' + loggedUser.id});
                }]
            })
            .whenEdit({
                processes: ['$route', 'Processes', function ($route, Processes) {
                    return Processes.query({p: 0, c: 10000, o: 'displayName ASC', f: 'user_id=' + $route.current.params.itemId});
                }]
            });
    }])
    .controller('tmProcessesListCtrl', ['$scope', 'processes', '$location', function ($scope, processes, $location) {
        $scope.processes = processes;
    }])
    .controller('tmProcessesEditCtrl', ['$scope', '$route', 'processes', '$location', function ($scope, $route, processes, $location) {
        $scope.processes = processes;
        $scope.currentUserId = $route.current.params.itemId;
    }])
;