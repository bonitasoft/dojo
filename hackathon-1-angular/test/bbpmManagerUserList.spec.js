describe('DirectiveSeed', function () {

    var $compile, $controller, $scope, $httpBackend;

    beforeEach(module('BonitaBPM6Portal', 'bonitasoft.bbpmManagerUserList', 'app/directives/bbpmManagerUserList/bbpmManagerUserList-tpl.html'));

    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_, _$httpBackend_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
    }));

    describe('directive', function () {
        it('should contains welcome message', function () {
            $httpBackend.whenGET('bonita/API/identity/user?c=10&f=manager_id%3Dundefined&o=lastname+ASC&p=0').respond("");
            var compiled = $compile('<bbpm-manager-user-list></bbpm-manager-user-list>')($scope);
            $scope.$digest();
        });
    });

});
