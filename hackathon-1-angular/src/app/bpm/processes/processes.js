angular.module('processes', ['resources.processes', 'resources.users', 'ui.router'])
    .controller('ProcessesCtrl', ['$scope', 'Processes', '$location', '$http', 'Users',  '$state',
        function ($scope, Processes, $location, $http, Users, $state) {
            $scope.currentUserId = $scope.$parent.user.id;
            Processes
                .query({p:0, user_id : $scope.currentUserId, d: 'deployedBy'}, callback);

            $scope.selectedIndex = -1;
            function callback(data) {
                $scope.processes = data;
                if ($scope.processes.length > 0) {
                    $scope.selectedIndex = 0;
                    $state.go('showDetails');
                }
            };

            function userCallback(data) {
                $scope.user =  data;
            }

            Users.getById($scope.currentUserId, userCallback);


            $scope.details = function(processId, index){
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
