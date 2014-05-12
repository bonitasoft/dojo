describe('CRUD button directive', function () {
	
	var $compile, $rootScope;
	
	beforeEach(module('directives.crud.buttons'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	
	
	it('creates an element with all children having btn class', function() {
		var element = $compile('<crud-buttons></crud-buttons>')($rootScope);
		
		 angular.forEach(element.children(), function(child, index){
			 expect(child.className).toContain('btn');
	     });
	});
	
});
