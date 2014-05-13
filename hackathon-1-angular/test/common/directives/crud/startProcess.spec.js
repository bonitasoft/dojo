describe('Start Process Directive', function () {
	
	var $compile, $rootScope;
	
	beforeEach(module('processes', 'resources.processes', 'resources.users'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;

	}));
	
	
	it('creates an element iframe and having iframe src rendered when information have been loaded', function() {
		var element = $compile('<start-process></start-process>')($rootScope);
        $rootScope.src = 'test.html';
        expect(element.ngSrc).toContain($rootScope.src);
	});
	
});
