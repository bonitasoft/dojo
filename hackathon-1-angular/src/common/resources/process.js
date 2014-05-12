'use strict';

/* Module declaration for Group resource */

angular.module('resources.processes', ['bonitaResource']);
angular.module('resources.processes').factory('Processes', ['bonitaResource', function (bonitaResource) {

  var processesResource = bonitaResource('processes','../bonita/API/bpm/process/');

  return processesResource;
}]);
