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
    }).directive('repeat', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(value) {
                    console.log(value);
                    console.log(scope);
                    if (scope.repeat === value) {
                        ctrl.$setValidity('repeat', true);
                        return value;
                    } else {
                        ctrl.$setValidity('repeat', false);
                        return undefined;
                    }
                });
            }
        };
    });

