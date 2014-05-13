angular.module('tasks', ['resources.task'])
    .controller('TaskCtrl', function($scope, Tasks, $route) {
        Tasks.query({f: ['state=ready', "user_id="+$route.current.params.userId]});

        function callback(data) {
            $scope.tasks = data;
        }
    });
