"use strict";

angular.module('bonitasoft.bbpmEditUser', ['bonitasoft.bbpmModel'])
    .controller('bbpmEditUserCtrl', [
        '$scope', 'userService',
        function ($scope, userService) {
            $scope.updateUser = function (user) {
                user.icon = "";
                userService.update(user)
                    .success(function () {
                        $scope.message = "Updated!";
                    });
            }
        }]).directive('bbpmEditUser', function () {
        return {
            restrict: 'E',
            controller: 'bbpmEditUserCtrl',
            scope: {user: '='},
            templateUrl: 'app/directives/bbpmEditUser/bbpmEditUser-tpl.html'
        };
    }).directive('equals', function () {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) return; // do nothing if no ng-model

                // watch own value and re-validate on change
                scope.$watch(attrs.ngModel, function () {
                    validate();
                });

                // observe the other value and re-validate on change
                attrs.$observe('equals', function (val) {
                    validate();
                });

                var validate = function () {
                    // values
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;

                    // set validity
                    ngModel.$setValidity('equals', val1 === val2);
                };
            }
        }
    });

