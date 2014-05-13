'use strict';

/* Module declaration for Group resource */

var tasksmodule = angular.module('resources.task', ['bonitaResource']);
tasksmodule.factory('Tasks', ['bonitaResource', '$http', function (bonitaResource, $http) {

  var taskResource = bonitaResource('tasks','../bonita/API/bpm/humanTask/');

    taskResource.prototype.assign = function (user, callback) {
        this.assigned_id=user.id
        $http.put("./bonita/API/bpm/humanTask/" + this.$id(), {assigned_id: user.id});
    };

    taskResource.prototype.unAssign = function (callback) {
        this.assigned_id="";
        $http.put("./bonita/API/bpm/humanTask/" + this.$id(), {assigned_id: ""}).then(callback);
    };

  return taskResource;
}]);
