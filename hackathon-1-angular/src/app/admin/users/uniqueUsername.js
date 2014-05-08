angular.module('admin-users-edit-uniqueUsername', ['resources.users'])
.directive('uniqueUsername', ["Users", function (Users) {
  return {
    require:'ngModel',
    restrict:'A',
    link:function (scope, el, attrs, ctrl) {

      ctrl.$parsers.push(function (viewValue) {

        if (viewValue) {
          Users.query('userName='+viewValue, function (users) {
            if (users.length === 0) {
              ctrl.$setValidity('uniqueUsername', true);
            } else {
              ctrl.$setValidity('uniqueUsername', false);
            }
          });
          return viewValue;
        }
      });
    }
  };
}]);