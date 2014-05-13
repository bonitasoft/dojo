angular.module('tasks', ['resources.task'])
    .controller('TaskCtrl', function($scope, Tasks, $route, Users) {
        Tasks.query({f: ['state=ready', "user_id="+$route.current.params.userId]}, callback);

        function userCallback(data) {
            $scope.user =  data;
        }

        Users.getById($route.current.params.userId, userCallback);

        function callback(data) {
            $scope.tasks = data;
        }

        $scope.isAssignedToCurrentUser = function(task) {
            return task.assigned_id = $scope.user.id;
        };

        $scope.assign = function(task) {
          /*task.assign($scope.user);*/
            task.assigned_id = $scope.user.is;
            task.$update();
        };
    });
