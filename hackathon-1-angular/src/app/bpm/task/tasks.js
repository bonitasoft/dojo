angular.module('tasks', ['resources.task', 'ui.router'])
    .config(function($stateProvider){

        $stateProvider.state('showTaskDetails', {
            parent : 'showTasks',
            views: {
                "taskquickdetails": {
                    templateUrl: "app/bpm/task/task-qkdetails.tpl.html",
                    controller: function($scope){
                        $scope.task = $scope.$parent.tasks[$scope.$parent.selectedIndex];
                        $scope.currentUserId = $scope.$parent.currentUserId;
                    }
                }

            }
        });
        $stateProvider.state('startTaskFor', {
            parent : 'showTasks',
            views: {
                "taskquickdetails": {
                    templateUrl: "app/bpm/task/task-do.tpl.html",
                    controller:'StartTaskCtrl'
                }

            }
        });
    })
    .controller('TaskCtrl', function($scope, Tasks, $route, Users, $state) {
        $scope.currentUserId = $scope.$parent.user.id;
        Tasks.query({f: ['state=ready', "user_id="+$scope.currentUserId]}, callback);

        function userCallback(data) {
            $scope.user =  data;
        }



        Users.getById($scope.currentUserId, userCallback);




        $scope.selectedIndex = -1;
        function callback(data) {
            $scope.tasks = data;
            if ($scope.tasks.length > 0) {
                $scope.selectedIndex = 0;
                $state.go('showTaskDetails');
            }
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

            $state.go('showTaskDetails');
        };


        $scope.details = function(task, index) {
            $scope.selectedIndex = index;
            $state.go('showTaskDetails');
        };
    })
    .controller('StartTaskCtrl', function($scope, Tasks, $route, Users, $state) {
        $scope.src = '/bonita/portal/homepage?ui=form&locale=fr#form=Buy+a+mini+extended--6.2--Model+choice$entry&task='+ $scope.$parent.tasks[$scope.$parent.selectedIndex].id +'&mode=form&userId='+$scope.$parent.currentUserId;
    });
