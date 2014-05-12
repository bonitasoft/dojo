
/**
 * Created by nicolas on 09/05/14.
 */
angular.module('BonitaBPM6PortalDev', ['BonitaBPM6Portal', 'ngMockE2E']).value('debugEnable',false).run(function($httpBackend, debugEnable) {


    // Simulate not yet implemented APIs according to specifications or agreement with API developer.

    items = [{name: 'item1'}, {name: 'item2'}];

    // returns the current list of items
    $httpBackend.whenGET('/API/notimplemented').respond(items);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/API/notimplemented').respond(function(method, url, data) {
        var newItem = angular.fromJson(data);
        items.push(newItem);
        return [200, newItem, {}];
    });


    /* All other requests must go through this mock to the real server. */

    var otherwise = function(url) {
        if (debugEnable) {
            console.log("passing through URL: " + url);
        }
        return true;
    }

    $httpBackend.whenGET(otherwise).passThrough();

    $httpBackend.whenPOST(otherwise).passThrough();

    $httpBackend.whenPUT(otherwise).passThrough();

    $httpBackend.whenDELETE(otherwise).passThrough();


});
