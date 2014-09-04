describe('greet', function() {

	it('should welcome the world', function() {
		greet().should.equals('Welcome World!');
	});

	it('should welcome Node', function() {
		greet("to Node!").should.equals('Welcome to Node!');
	});
});