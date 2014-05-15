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

            .whenEdit({
                process: ['$route', 'Processes', function ($route, Processes) {
                    var process= Processes.getById($route.current.params.itemId);
                   console.log(process);
                    return process;
                }]
            })
        ;
    }])
    .controller('team.ProcessesListCtrl', ['$http', '$scope', 'crudListMethods', '$filter', 'processes', '$route', function ($http, $scope, crudListMethods, $filter, processes, $route) {
        $scope.processes = processes;
        if ($route.current.params.user_id != null) {
            $http({
                method: 'GET',
                url: 'bonita/API/identity/user/' + $route.current.params.user_id
            }).success(function (userData) {
                $scope.processesActor = userData;
            });
        }
        angular.extend($scope, crudListMethods('/team/processes'));

        $scope.displayProcessPossibleStatus = [
            {name: 'Enabled', filterItems: function (process) {
                return process.activationState == 'ENABLED' && process.configurationState == 'RESOLVED';
            }},
            {name: 'Disabled', filterItems: function (process) {
                return process.activationState == 'DISABLED';
            }},
            {name: 'Resolved', filterItems: function (process) {
                return process.configurationState == 'RESOLVED'
            }},
            {name: 'UnResolved', filterItems: function (process) {
                return process.configurationState == 'UNRESOLVED'
            }}
        ];

        $scope.isProcessEnabled= function(process)
        {
            return process.activationState == 'ENABLED' && process.configurationState == 'RESOLVED';
        }




        $scope.displayProcesses = $scope.displayProcessPossibleStatus[0];

        $scope.isProcessVisible = function (item) {
            return $scope.displayProcesses.filterItems(item);
        };

    }])

    .controller('team.ProcessesEditCtrl', ['$scope', '$location', '$filter', 'process', function ($scope, $location, $filter, process) {

        console.log (process);

        $scope.process = process;

        $scope.cancelEdit = function() {
            $location.path('/team/processes/');
        };

        $scope.getUrl=function(){
            var url= 'bonita/portal/homepage?ui=form&locale=en#form='+$scope.process.displayName+'--'+$scope.process.version+'}}$entry&process='+$scope.process.id+'&autoInstantiate=false&mode=form&userId='+$scope.loggedUser.user_id;
            console.log(url);
            return url;
        }

        $scope.onSave = function (user) {
            $location.path('/admin/users');
        };

        $scope.onError = function() {
            console.log("Unable to save user!");
        };

        $scope.onRemove = function(user) {
            $location.path('/admin/users');
        };

    }])

;