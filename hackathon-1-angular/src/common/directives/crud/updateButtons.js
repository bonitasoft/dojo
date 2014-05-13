'use strict';

/* Module declaration for CRUD buttons */
angular.module('directives.update.buttons', [])

.directive('updateButtons', function () {
  return {
    restrict:'E',
    replace:true,
    template:
      '<div>' +
      '  <button type="button" class="btn btn-primary save" ng-disabled="!canSave()" ng-click="save()">Save</button>' +
      '  <button type="button" class="btn btn-warning revert" ng-click="revertChanges()" ng-disabled="!canRevert()">Revert changes</button>'+
      '  <button type="button" class="btn" ng-click="cancelEdit()">Cancel</button>'+
      '</div>'
  };
});