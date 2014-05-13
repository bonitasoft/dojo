angular.module('teammanager', ['directives.gravatar', 'ui.router', 'processes'])
    .config(function($stateProvider) {
        $stateProvider.state('showUsers', {
            views: {
                url: '',
                "user-tab-content": {
                    templateUrl: "app/teammanager/user.tpl.html",
                    controller: 'editUserCtrl'
                }
            }
        });
        $stateProvider.state('showProcesses', {
            views: {
                "user-tab-content": {
                    templateUrl: "app/bpm/processes/processes-tpl.html",
                    controller: 'ProcessesCtrl'
                }

            }
        });
        $stateProvider.state('showTasks', {
            views: {
                "user-tab-content": {
                    templateUrl: "app/bpm/task/tasks.tpl.html",
                    controller: 'TaskCtrl'
                }

            }
        });
        $stateProvider.state('showDetails', {
            parent : 'showProcesses',
            views: {
                "quickdetails": {
                    templateUrl: "app/bpm/processes/process-qkdetails.tpl.html",
                    controller: function($scope){
                        $scope.process = $scope.$parent.processes[$scope.$parent.selectedIndex];
                        $scope.currentUserId = $scope.$parent.currentUserId;
                    }
                }

            }
        });
        $stateProvider.state('startFor', {
            parent : 'showProcesses',
            views: {
                "quickdetails": {
                    templateUrl: "app/bpm/processes/start-process-tpl.html",
                    controller:'StartProcessCtrl'
                }

            }
        });
    }).controller('userCtrl', function($scope, Users, $route, $state) {
        $scope.selectedIndex = 0;
        $scope.changeTab = function(index){
            $scope.selectedIndex = index;
        }
        Users.getById($route.current.params.id, callback);

        function callback(data) {
            $scope.user = data;
            $scope.tabs = [{state: 'showUsers', name: 'User infos'},
                { state:'showTasks', name: 'User Tasks'},
                { state: 'showProcesses', name: 'User Processes'}];
        };

    }).controller('listUsersCtrl', function($scope, Users, $location) {
        Users.query('manager_id='+ $scope.loggedUser.id, callback);

        function callback(data) {
            $scope.users = data;
        }

        $scope.edit = function(user) {
            $location.path('/teammanager/user/' + user.id);
        }
    })
    .controller('editUserCtrl', function($scope, Users, $route, $window) {
        Users.getById($route.current.params.id, callback);

        function callback(data) {
            $scope.user = data;
            Users.query('manager_id='+ $scope.user.id, callback2);
        };

        function callback2(data) {
            $scope.managedUsers = data;
        };

        $scope.save = function() {
            $scope.user.$save();
        };

        $scope.cancel = function() {
            $window.history.back();
        };

    });
