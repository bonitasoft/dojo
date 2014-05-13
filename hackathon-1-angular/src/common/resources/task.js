'use strict';

/* Module declaration for User resource */

angular.module('resources.tasks', ['bonitaResource'])
    .factory('Tasks', ['bonitaResource', function (bonitaResource) {

        var taskResource = bonitaResource('tasks', '../bonita/API/bpm/humanTask/');

        return taskResource;
    }]);
