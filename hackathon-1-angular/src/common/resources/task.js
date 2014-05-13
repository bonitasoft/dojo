'use strict';

/* Module declaration for Group resource */

var tasksmodule = angular.module('resources.task', ['bonitaResource']);
tasksmodule.factory('Tasks', ['bonitaResource', function (bonitaResource) {

  var processesResource = bonitaResource('tasks','../bonita/API/bpm/humanTask/');

  return processesResource;
}]);
