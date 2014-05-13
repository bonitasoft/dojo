describe('BPM Manager User list', function () {

    var $compile, $controller, $scope, $httpBackend;

    beforeEach(module('BonitaBPM6Portal', 'bonitasoft.bbpmManagerUserList', 'app/directives/bbpmManagerUserList/bbpmManagerUserList-tpl.html'));

    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_, _$httpBackend_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
    }));

    describe('directive', function () {
        it('should display user managed by user with id 1', function () {
            $httpBackend.whenGET('bonita/API/identity/user?c=10&f=manager_id%3D1&o=lastname+ASC&p=0').respond(
                [{  "id":"2",
                    "userName":"daniela.angelo",
                    "lastname":"Angelo",
                    "firstname":"Daniela"
                }]);
            var compiled = $compile('<bbpm-manager-user-list user-id="1"></bbpm-manager-user-list>')($scope);
            $scope.$digest();
            $httpBackend.flush();

            expect(compiled.find('td').text().trim()).toBe("2daniela.angeloAngeloDaniela");
        });
    });

});
