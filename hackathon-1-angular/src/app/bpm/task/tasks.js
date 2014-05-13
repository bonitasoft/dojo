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

        $scope.isAssignedToCurrentUser = function(task) {
            return task.assigned_id == $scope.user.id;
        };

        $scope.assign = function(task) {
            task.assign($scope.user);
        };

        $scope.unAssign = function(task) {
            task.unAssign();
        };

        $scope.doItOnBehalf = function(task) {
            $scope.src = '/bonita/portal/homepage?ui=form&locale=fr#form=Buy+a+mini+extended--6.2--Model+choice$entry&task='+ task.id +'&mode=form&assignTask=true';
        };

    });
