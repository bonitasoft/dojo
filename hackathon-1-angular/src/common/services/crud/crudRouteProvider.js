'use strict';

/* Module declaration for Routing mechanism unified in case of CRUD operations on Items */
/*
 CrudRouteProvider is based on naming conventions that limit code duplication and helps the developer to structure source code.
 */

(function() {

  function crudRouteProvider($routeProvider) {

    // Do nothing on get.
    this.$get = angular.noop;

    this.routesFor = function(resourceName, urlPrefix, routePrefix) {
      var baseUrl = resourceName.toLowerCase();
      var baseRoute = '/' + resourceName.toLowerCase();
      routePrefix = routePrefix || urlPrefix;

      // Prepend the urlPrefix if available.
      if ( angular.isString(urlPrefix) && urlPrefix !== '' ) {
        baseUrl = urlPrefix + '/' + baseUrl;
      }

      // Prepend the routePrefix if it was provided;
      if (routePrefix !== null && routePrefix !== undefined && routePrefix !== '') {
        baseRoute = '/' + routePrefix + baseRoute;
      }

      // Create the templateUrl for a route to our resource that does the specified operation.
      var templateUrl = function(operation) {
        return 'app/' + baseUrl + '/' + resourceName.toLowerCase() +'-'+operation.toLowerCase()+'-tpl.html';
      };
      // Create the controller name for a route to our resource that does the specified operation.
      var controllerName = function(operation) {
        return resourceName + operation +'Ctrl';
      };

      // This is the object that our `routesFor()` function returns.  It decorates `$routeProvider`,
      // delegating the `when()` and `otherwise()` functions but also exposing some new functions for
      // creating CRUD routes.  Specifically we have `whenList(), `whenNew()` and `whenEdit()`.
      var routeBuilder = {
        // Create a route that will handle showing a list of items
        whenList: function(resolveFns) {
          routeBuilder.when(baseRoute, {
            templateUrl: templateUrl('List'),
            controller: controllerName('List'),
            resolve: resolveFns
          });
          return routeBuilder;
        },
        // Create a route that will handle creating a new item
        whenNew: function(resolveFns) {
          routeBuilder.when(baseRoute +'/new', {
            templateUrl: templateUrl('Edit'),
            controller: controllerName('Edit'),
            resolve: resolveFns
          });
          return routeBuilder;
        },
        // Create a route that will handle editing an existing item
        whenEdit: function(resolveFns) {
          routeBuilder.when(baseRoute+'/:itemId', {
            templateUrl: templateUrl('Edit'),
            controller: controllerName('Edit'),
            resolve: resolveFns
          });
          return routeBuilder;
        },
        // Pass-through to `$routeProvider.when()`
        when: function(path, route) {
          $routeProvider.when(path, route);
          return routeBuilder;
        },
        // Pass-through to `$routeProvider.otherwise()`
        otherwise: function(params) {
          $routeProvider.otherwise(params);
          return routeBuilder;
        },
        // Access to the core $routeProvider.
        $routeProvider: $routeProvider
      };
      return routeBuilder;
    };
  }
  
  // we add our injection dependencies using the $inject form
  crudRouteProvider.$inject = ['$routeProvider'];

 
  angular.module('services.crudRouteProvider', ['ngRoute']).provider('crudRoute', crudRouteProvider);
})();
