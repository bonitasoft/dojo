"use strict";

angular.module('bonitasoft.bbpmEditUser', [])
    .controller('bbpmEditUserCtrl', ['$scope', '$http', function ($scope,$http) {
        $scope.updateUser= function (user){
            user.icon="";
            $http({
                method:'PUT',
                url: 'bonita/API/identity/user/'+ user.id,
                data: user
            }).success(function() {
                $scope.message = "Updated!";
            });
        }
    }]).directive('bbpmEditUser', function(){
        return {
            restrict: 'E',
            controller: 'bbpmEditUserCtrl',
            scope: {user: '='},
            templateUrl: 'app/directives/bbpmEditUser/bbpmEditUser-tpl.html'
        };
    });

