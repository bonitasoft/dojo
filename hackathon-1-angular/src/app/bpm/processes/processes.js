angular.module('processes', ['resources.processes', 'resources.users'])
    .controller('ProcessesCtrl', ['$scope', 'Processes', '$location', '$http', '$route',
        function ($scope, Processes, $location, $http, $route) {
            $scope.currentUserId = $route.current.params.id;
        Processes
            .query({p:0, user_id : $route.current.params.id, d: 'deployedBy'}, callback);

        function callback(data) {
            $scope.processes = data;
        };

        $scope.start = function (process) {
            $location.path('/bpm/processes/' + process.id);
        };
    }]).controller('StartProcessCtrl', ['$scope', 'Processes', 'Users', '$location', '$http', '$route',
        function ($scope, Processes, Users, $location, $http, $route) {
            Processes
                .getById($route.current.params.processId, processCallback);
            Users.getById($route.current.params.userId, userCallback)

            function userCallback(data) {
                $scope.user = data;
            };

            function processCallback(data) {
                $scope.process = data;
            };

        }]);
