'use strict';

/* Module declaration for User resource */

angular.module('resources.users', ['bonitaResource']);
angular.module('resources.users')

    .factory('Users', ['bonitaResource', function (bonitaResource) {

        var userResource = bonitaResource('users','../bonita/API/identity/user/');
  
        userResource.prototype.getFullName = function () {
            return this.lastname + " " + this.firstname + " (" + this.userName + ")";
        };

        userResource.getTeamMembers = function (managerUserId, cb, errorcb) {
            return userResource.query({p:0,c:10000,o:'lastname ASC',f:'manager_id=' + managerUserId}, cb, errorcb);
        };

        return userResource;
    }])

;
