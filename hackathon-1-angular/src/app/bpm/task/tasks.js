angular.module('tasks', ['resources.task', 'ui.router'])
    .config(function($stateProvider){

        $stateProvider.state('showTaskDetails', {
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
            views: {
                "taskquickdetails": {
                    templateUrl: "app/bpm/task/task-do.tpl.html",
                    controller:'StartProcessCtrl'
                }

            }
        });
    })
    .controller('TaskCtrl', function($scope, Tasks, $route, Users, $state) {
        Tasks.query({f: ['state=ready', "user_id="+$route.current.params.userId]}, callback);

        function userCallback(data) {
            $scope.user =  data;
        }

        $scope.currentUserId = $route.current.params.userId;

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

        $scope.selectedIndex = -1;
        $scope.details = function(task, index) {
            $scope.selectedIndex = index;
            $state.go('showTaskDetails');
        };
    });
