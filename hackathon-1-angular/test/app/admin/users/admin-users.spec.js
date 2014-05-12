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
            expect(locals.$scope.displayUsers).toBe($scope.displayUsersPossibleValues[0]);
            expect(locals.crudListMethods).toHaveBeenCalled();
        }));

        it('should show single user correctly', inject(function($controller) {
            var locals = {
                $scope: $scope,
                crudListMethods: jasmine.createSpy('crudListMethods'),
                users: [{
                    firstname:'te',
                    lastname:'st',
                    id:1,
                    username:'test',
                    manager_id:{
                        firstname:'man',
                        lastname:'ager',
                        id:10
                    }}]
            };
            $controller('UsersListCtrl', locals);

            expect(locals.$scope.users).toBe(locals.users);
            expect(locals.$scope.displayUsers).toBe($scope.displayUsersPossibleValues[0]);
            expect(locals.crudListMethods).toHaveBeenCalled();
        }));
    });
});