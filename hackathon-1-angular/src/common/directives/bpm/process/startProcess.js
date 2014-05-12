'use strict';

angular.module('directives.bpm.process.start', [])

    .directive('startProcess', function() {
        return {
            scope : false,
            restrict : 'E',
            template: '<iframe id="bonitaframe" ng-src="{{src}}"></iframe>'
            ,link : function ($scope){
                $scope.src= '/bonita/portal/homepage?ui=form&locale=en#' +
                'form='+$scope.process.name+'--'+$scope.process.version+'$entry&' +
                'process='+$scope.process.id+'&autoInstantiate=false&mode=form&' +
                'userId='+$scope.user.id;
          }

        }
    });
