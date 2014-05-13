angular.module('processes', ['resources.processes', 'resources.users', 'ui.router'])
    .config(function($stateProvider){

        $stateProvider.state('showDetails', {
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
            views: {
                "quickdetails": {
                    templateUrl: "app/bpm/processes/start-process-tpl.html",
                    controller:'StartProcessCtrl'
                }

            }
        });
    })
    .controller('ProcessesCtrl', ['$scope', 'Processes', '$location', '$http', '$route', 'Users',  '$state',
        function ($scope, Processes, $location, $http, $route, Users, $state) {
            $scope.currentUserId = $route.current.params.id;
            Processes
                .query({p:0, user_id : $route.current.params.id, d: 'deployedBy'}, callback);

            function callback(data) {
                $scope.processes = data;
            };

            $scope.selectedIndex = -1;
            $scope.details = function(processId, index){
                console.log("selected :"+index);
                $scope.selectedIndex = index;
                $state.go('showDetails', {processId : processId});
            }
   	    $scope.start = function (process) {
                $location.path('/bpm/processes/' + process.id);
            };
	}]).controller('StartProcessCtrl', ['$scope', 'Processes', 'Users', '$location', '$http', '$route',
        function ($scope, Processes, Users, $location, $http, $route) {
            $scope.processId = $scope.$parent.processes[$scope.$parent.selectedIndex].id;
            $scope.userId = $scope.$parent.currentUserId;

            Processes.getById($scope.processId, processCallback);
            Users.getById($scope.userId, userCallback)

            function userCallback(data) {
                $scope.user = data;
                if($scope.process){
                    $scope.src= $scope.renderSrc($scope);
                }
            };

            function processCallback(data) {
                $scope.process = data;
                if($scope.user){
                    $scope.src= $scope.renderSrc($scope);
                }
            };
            $scope.renderSrc = function(_scope){
                return '/bonita/portal/homepage?ui=form&locale=en#' +
                    'form='+_scope.process.name+'--'+_scope.process.version+'$entry&' +
                    'process='+_scope.process.id+'&autoInstantiate=false&mode=form&' +
                    'userId='+_scope.user.id;
            }

        }]).directive('startProcess', function() {
        return {
            scope : false,
            restrict : 'E',
            template: '<iframe id="bonitaframe" ng-src="{{src}}" class="whole-page"></iframe>'
        }
    });
