angular.module('team-processes', ['services.crud', 'directives.crud', 'directives.gravatar', 'resources.processes'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Processes', 'team')
            .whenList({
                processes: ['$route', 'Processes','$http', function ($route, Processes,$http) {
                    var managerId;
                    var filters =  new Array();
                    if ($route.current.params.user_id != null) {
                        filters.push("user_id="+$route.current.params.user_id);
                    }

                    if ($route.current.params.managerId != null) {
                        filters.push('team_manager_id=' + $route.current.params.managerId);
                        return Processes.query({p: 0, c: 10000, f: filters.join("&"), o: 'displayName ASC'});
                    } else {
                        $http({
                            method: 'GET',
                            url: 'bonita/API/system/session/unusedid'
                        }).success(function (data) {
                            filters.push('team_manager_id='+data.user_id);
                            return Processes.query({p: 0, c: 10000, f: filters.join("&"), o: 'displayName ASC'});
                        });
                    }
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
        ;
    }])
    .controller('team.ProcessesListCtrl', ['$http', '$scope', 'crudListMethods', '$filter', 'processes', '$route', function ($http, $scope, crudListMethods, $filter, processes, $route) {
        $scope.processes = processes;


        angular.extend($scope, crudListMethods('/team/processes'));

        $scope.displayProcessPossibleStatus = [
            {name: 'Enabled', filterItems: function (process) {
                return process.activationState == 'ENABLED' && process.configurationState == 'RESOLVED';
            }},
            {name: 'Disabled', filterItems: function (user) {
                return process.activationState == 'DISABLED';
            }},
            {name: 'Resolved', filterItems: function (user) {
                return process.configurationState == 'RESOLVED'
            }},
            {name: 'UnResolved', filterItems: function (user) {
                return process.configurationState == 'UNRESOLVED'
            }}
        ];

        $scope.displayProcesses = $scope.displayProcessPossibleStatus[0];

        $scope.isProcessVisible = function (item) {
            return $scope.displayProcesses.filterItems(item);
        };

    }])


;