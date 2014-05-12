/**
 * Created by Fabio on 12/05/2014.
 */
'use strict';

/* Module declaration for User resource */

angular.module('resources.processes', ['bonitaResource'])
    .factory('Processes', ['bonitaResource', function (bonitaResource) {
        var processResource = bonitaResource('processes', '../bonita/API/bpm/process/');

        return processResource;
    }]);
