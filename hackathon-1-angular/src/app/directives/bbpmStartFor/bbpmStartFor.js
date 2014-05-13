"use strict";

angular.module('bonitasoft.bbpmStartFor', [])
    .controller('bbpmStartForCtrl', ['$scope', 'loggedUser', function ($scope, loggedUser) {

        $scope.iFrameUrl = "http://localhost:8081/bonita/portal/homepage?ui=form&tenant=1#form="+$scope.process.name+"--"+ $scope.process.version +"$entry&process="+$scope.process.id+"&autoInstantiate=false&mode=form&userId="+loggedUser.id;

    }]).directive('bbpmStartFor', function () {
        return {
            restrict: 'E',
            controller: 'bbpmStartForCtrl',
            scope: { process: '=' },
            templateUrl: 'app/directives/bbpmStartFor/bbpmStartFor-tpl.html'
        };
    });

