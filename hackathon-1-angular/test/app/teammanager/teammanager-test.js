describe('teammanager-users-list', function() {

    beforeEach(module('teammanager', 'resources.users'));

    var $scope, $location, $usersResources, resultingUsers = {};
    beforeEach(inject(function ($rootScope, $injector, Users) {
        $scope = $rootScope.$new();
        $location = $injector.get('$location');
        $usersResources = jasmine.createSpy('Users');
        $usersResources.query = function(queryJson, successcb, errorcb){
            successcb(resultingUsers);
        }
        spyOn($usersResources, 'query').andCallThrough();
    }));

    describe('listUsersCtrl tests', function () {

        it('should show empty user list correctly', inject(function($controller) {
            $scope.loggedUser = {};
            $scope.loggedUser.id = '1';
            var locals = {
                $scope: $scope,
                Users: $usersResources,
                $location: $location
            };

            $controller('listUsersCtrl', locals);
            expect(locals.$scope.users).toBe(resultingUsers);

            expect(locals.Users.query).toHaveBeenCalled();
        }));
    });
});