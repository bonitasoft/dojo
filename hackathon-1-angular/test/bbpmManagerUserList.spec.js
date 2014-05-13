describe('DirectiveSeed', function () {

    var $compile, $controller, $scope;

    beforeEach(module('bonitasoft.bbpmManagerUserList', 'app/directives/bbpmManagerUserList/bbpmManagerUserList-tpl.html'));

    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }));

    describe('directive', function () {
        it('should contains welcome message', function () {
            var compiled = $compile('<bbpm-manager-user-list></bbpm-manager-user-list>')($scope);
            $scope.$digest();
        });
    });

});
