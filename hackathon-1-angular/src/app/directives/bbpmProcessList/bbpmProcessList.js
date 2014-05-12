'use.strict';

angular.module('bonitasoft.bbpmProcessList', [])
    .controller('bbpmProcessListCtrl', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: 'GET', url: 'bonita/API/bpm/process', params: {
                p: '0',
                c: '10',
                o: 'displayName ASC'
            }
        }).success(function(processes){
            $scope.processes = processes;
        });

    }]).directive('bbpmProcessList', function(){
      return {
          restrict: 'E',
          controller: 'bbpmProcessListCtrl',
          scope: { profile: '=?' },
          templateUrl: 'app/directives/bbpmProcessList/bbpmProcessList-tpl.html'
      };
    });

