describe('admin-users-list', function() {

    beforeEach(module('admin-users', 'services.crud'));

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    describe('UsersListCtrl tests', function () {

        it('should show empty user list correctly', inject(function($controller) {
            var locals = {
                $scope: $scope,
                crudListMethods: jasmine.createSpy('crudListMethods'),
                users: {}
            };
            $controller('UsersListCtrl', locals);

            expect(locals.$scope.users).toBe(locals.users);
            expect(locals.crudListMethods).toHaveBeenCalled();
        }));
    });
});