angular.module('tm-startprocess', ['ngRoute'])
    .controller('tmStartprocessCtrl', ['$scope', 'loggedUser', '$route', function ($scope, loggedUser, $route) {
        $scope.name = $route.current.params.processName;
        $scope.version = $route.current.params.processVersion;
        $scope.processId = $route.current.params.processId;
        $scope.iframeurl = "bonita/portal/homepage?ui=form&locale=en&tenant=1#form="+ $scope.name + "--" + $scope.version + "$entry&process=" + $scope.processId + "&autoInstantiate=false&mode=form&userId="+ $route.current.params.userId;
        $scope.processes = true;
        $scope.currentUserId = $route.current.params.userId;
    }]);