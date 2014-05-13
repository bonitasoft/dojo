angular.module('tm-tasks', ['services.crud', 'directives.crud', 'resources.tasks'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Tasks', 'tm')
            .whenList({
                tasks: ['Tasks', function (Tasks) {
                    return Tasks.query({p:0,c:10000,o:'displayName ASC',f:'team_manager_id=' + loggedUser.id, d:'rootContainerId'});
                }]
            })
            .whenEdit({
                tasks: ['Tasks', '$route', function (Tasks, $route) {
                    return Tasks.query({p:0,c:10000,o:'displayName ASC',f:'user_id=' + $route.current.params.itemId, d:'rootContainerId'});
                }]
            });
    }])
    .controller('tmTasksListCtrl', ['$scope', 'crudListMethods', '$filter', 'tasks', 'loggedUser', function ($scope, crudListMethods, $filter, tasks, loggedUser) {
        $scope.tasks = tasks;

        $scope.assign = function (task, $index, $event) {
            $event.stopPropagation();
        };

    }])

    .controller('tmTasksEditCtrl', ['$scope', '$location', '$filter', 'tasks', '$http', '$route', function ($scope, $location, $filter, tasks, $http, $route) {

        $scope.tasks = tasks;
        $scope.currentUserId = $route.current.params.itemId;

        $scope.unassign = function (task, $index, $event) {

            $event.stopPropagation();

            $http['put']("../bonita/API/bpm/humanTask/" + $scope.tasks[$index].id, {"assigned_id":""})
            .success(function(data, status, headers, config) {
                   $scope.tasks[$index].assigned_id = "";
            });

        };

    }])
;