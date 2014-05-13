describe('DirectiveSeed', function () {

    var $compile, $controller, $rootScope;

    beforeEach(module('bonitasoft.bbpmManagerUserList', 'bbpmManagerUserList-tpl.hmtl'));

    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('directive', function () {
        it('should contains welcome message', function () {
            var compiled = $compile('<bbpm-manager-user-list></bbpm-manager-user-list>')($rootScope);
            $rootScope.$apply();
        });
    });

});
