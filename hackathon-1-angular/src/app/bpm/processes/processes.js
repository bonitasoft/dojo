angular.module('processes', ['resources.processes', 'resources.users'])
    .controller('ProcessesCtrl', ['$scope', 'Processes', '$location', '$http', '$route', 'Users',
        function ($scope, Processes, $location, $http, $route, Users) {
            $scope.currentUserId = $route.current.params.id;
        Processes
            .query({p:0, user_id : $route.current.params.id, d: 'deployedBy'}, callback);

        function callback(data) {
            $scope.processes = data;
        };

        $scope.start = function (process) {
            $location.path('/bpm/processes/' + process.id);
        };

            function userCallback(data) {
                $scope.user =  data;
            }

            Users.getById($scope.currentUserId, userCallback);

    }]).controller('StartProcessCtrl', ['$scope', 'Processes', 'Users', '$location', '$http', '$route',
        function ($scope, Processes, Users, $location, $http, $route) {
            Processes.getById($route.current.params.processId, processCallback);
            Users.getById($route.current.params.userId, userCallback)

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
