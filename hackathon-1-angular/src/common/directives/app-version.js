'use strict';

/* Directives */

angular.module('BonitaBPM6Portal.appVersion', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
