"use strict";

angular.module('bonitasoft.bbpmStartFor', ['ngSanitize'])
    .controller('bbpmStartForCtrl', [
        '$scope', 'loggedUser', '$sce', function ($scope, loggedUser, $sce) {
            $scope.iFrameUrl = $sce.trustAsResourceUrl(
                    "bonita/portal/homepage?ui=form&tenant=1#" +
                    "form=" + $scope.process.name + "--" + $scope.process.version + "$entry" +
                    "&process=" + $scope.process.id +
                    "&autoInstantiate=false&mode=form&userId=" + $scope.userId || loggedUser.id);

        }]).directive('bbpmStartFor', function () {
        return {
            restrict: 'E',
            controller: 'bbpmStartForCtrl',
            scope: {
                process: '=',
                userId: '='
            },
            templateUrl: 'app/directives/bbpmStartFor/bbpmStartFor-tpl.html'
        };
    });

