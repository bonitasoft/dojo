angular.module('tasks', ['resources.task'])
    .controller('TaskCtrl', function($scope, Tasks, $route) {
        Tasks.query({f: {f: 'state=ready'},f: {f: 'user_id=' + $route.current.params.userId}});

        function callback(data) {
            $scope.tasks = data;
        }
    });
