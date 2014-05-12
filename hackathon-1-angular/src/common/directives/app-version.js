'use strict';

/* Directives */

angular.module('directive.appVersion', ['BonitaBPM6Portal.version']).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
