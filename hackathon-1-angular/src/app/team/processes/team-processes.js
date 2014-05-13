angular.module('team-processes', ['services.crud', 'directives.crud', 'directives.gravatar', 'resources.processes'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Processes', 'team')
            .whenList({
                processes: ['Processes', function (Processes) {
                    return Processes.all();
                }]
            })
            /*.whenNew({
             user: ['Users', function(Users) { return new Users(); }]
             })*/
            .whenEdit({
                process: ['$route', 'Processes', function ($route, Processes) {
                    return Processes.getById($route.current.params.itemId);
                }]
            })
//            .when('/team/users/:managerId', {
//                templateUrl: '/team/users/users-list-tpl.html',
//                controller: 'team.UsersListCtrl',
//                action: 'list'
//            })
        ;
    }])
    .controller('team.ProcessesListCtrl', ['$http','$scope', 'crudListMethods', '$filter', 'processes', '$route', function ($http,$scope, crudListMethods, $filter, processes, $route) {
         $scope.processes=processes;
        angular.extend($scope, crudListMethods('/team/processes'));

        $scope.displayProcessPossibleStatus = [
            {name: 'Enabled', filterItems: function (process) {
                return process.activationState=='ENABLED' && process.configurationState=='RESOLVED' ;
            }},
            {name: 'Disabled', filterItems: function (user) {
                return process.activationState=='DISABLED' ;
            }},
            {name: 'Resolved', filterItems: function (user) {
                return process.configurationState=='RESOLVED'
            }},
            {name: 'UnResolved', filterItems: function (user) {
                return process.configurationState=='UNRESOLVED'
            }}
        ];

        $scope.displayProcesses = $scope.displayProcessPossibleStatus[0];

        $scope.isProcessVisible = function (item) {
            return $scope.displayProcesses.filterItems(item);
        };

    }])


;