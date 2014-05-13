angular.module('tasks', ['resources.task'])
    .controller('TaskCtrl', function($scope, Tasks, $route, Users) {
        Tasks.query({f: ['state=ready', "user_id="+$scope.$parent.user.id]}, callback);

        function userCallback(data) {
            $scope.user =  data;
        }

        Users.getById($scope.$parent.user.id, userCallback);

        function callback(data) {
            $scope.tasks = data;
        }
    });
