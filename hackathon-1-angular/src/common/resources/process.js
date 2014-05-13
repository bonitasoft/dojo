'use strict';

/* Module declaration for User resource */

angular.module('resources.processes', ['bonitaResource']);
angular.module('resources.processes').factory('Processes', ['bonitaResource', function (bonitaResource) {

  var processResource = bonitaResource('processes','../bonita/API/bpm/process/');

    processResource.all = function (cb, errorcb) {
        return this.query({p:0,c:10000,o:'displayName ASC'}, cb, errorcb);
    };

    return processResource;
}]);
