/**
 * Created by Fabio on 13/05/2014.
 */
angular.module('tm-performtask', ['ngRoute'])
    .controller('tmPerformtaskCtrl', ['$scope', 'loggedUser', '$route', function ($scope, loggedUser, $route) {
        $scope.processName = $route.current.params.processName;
        $scope.processVersion = $route.current.params.processVersion;
        $scope.taskName = $route.current.params.taskName;
        $scope.taskId = $route.current.params.taskId;

        $scope.iframeurl = "bonita/portal/homepage?ui=form&locale=en&tenant=1#form="+ $scope.processName + "--" + $scope.processVersion + "--" + $scope.taskName  + "$entry&task=" + $scope.taskId + "&mode=form&userId="+ $route.current.params.userId;

        $scope.tasks = true;
        $scope.currentUserId = $route.current.params.userId;
    }]);