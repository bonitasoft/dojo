angular.module('tm-processes', ['services.crud', 'directives.crud', 'resources.processes'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Processes', 'tm')
            .whenList({
                processes: ['Processes', 'loggedUser', function (Processes, loggedUser) {
                    return Processes.query({p:0,c:10000,o:'displayName ASC',f:'team_manager_id=' + loggedUser.id});
                }]
            });
    }])
    .controller('tmProcessesListCtrl', ['$scope', 'crudListMethods', '$filter', 'processes', 'loggedUser', '$location', function ($scope, crudListMethods, $filter, processes, loggedUser, $location) {
        $scope.processes = processes;

        angular.extend($scope, crudListMethods('/tm/processes'));

        $scope.go = function (path, processName, processVersion, processId) {
            window.alert('go to ' + path + '?processName=' + processName + '&processVersion=' + processVersion + '&processId' + processId);
            $location.path(path + '?processName=' + processName + '&processVersion=' + processVersion + '&processId' + processId);
        }
    }]);