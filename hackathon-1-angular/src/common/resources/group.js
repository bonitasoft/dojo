'use strict';

/* Module declaration for Group resource */

angular.module('resources.groups', ['bonitaResource']);
angular.module('resources.groups').factory('Groups', ['bonitaResource', function (bonitaResource) {

  var groupResource = bonitaResource('groups','../bonita/API/identity/group/');
  groupResource.all = function (cb, errorcb) {
      return this.query({p:0,c:10000,o:'name ASC'}, cb, errorcb);
  };
  
  return groupResource;
}]);
