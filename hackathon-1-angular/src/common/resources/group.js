'use strict';

/* Module declaration for Group resource */

angular.module('resources.groups', ['bonitaResource'])
    .factory('Groups', ['bonitaResource', function (bonitaResource) {

        var caseResource = bonitaResource('groups', '../bonita/API/identity/group/');

        return caseResource;
    }]);
