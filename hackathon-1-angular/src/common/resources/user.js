'use strict';

/* Module declaration for User resource */

angular.module('resources.users', ['bonitaResource']);
angular.module('resources.users')
    .factory('Users', ['bonitaResource', function (bonitaResource) {

  var userResource = bonitaResource('users','../bonita/API/identity/user/', { d: 'manager_id' });
  
  userResource.prototype.getFullName = function () {
    return this.lastname + " " + this.firstname + " (" + this.userName + ")";
  };

  return userResource;
}]);
