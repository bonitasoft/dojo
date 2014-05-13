'use strict';

/* Module declaration for CRUD buttons */
angular.module('directives.crud.buttons', [])

.directive('saveButton', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '  <button type="button" class="btn btn-primary save" ng-disabled="!canSave()" ng-click="save()">Save</button>'
    };
})

.directive('revertButton', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '  <button type="button" class="btn btn-warning revert" ng-click="revertChanges()" ng-disabled="!canRevert()">Revert changes</button>'
    };
})

.directive('removeButton', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '  <button type="button" class="btn btn-danger remove" ng-click="remove()" ng-show="canRemove()">Remove</button>'
    };
})

.directive('cancelButton', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '  <button type="button" class="btn" ng-click="cancelEdit()">Cancel</button>'
    };
})

.directive('crudButtons', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '<div>' +
            '  <save-button></save-button>' + '  <revert-button></revert-button>' + '  <remove-button></remove-button>' + '  <cancel-button></cancel-button>' +
            '</div>'
    };
})

.directive('updateButtons', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '<div>' +
            '  <save-button></save-button>' + '  <revert-button></revert-button>' + '  <cancel-button></cancel-button>' +
            '</div>'
    };
})

;