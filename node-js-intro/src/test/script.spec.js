require('chai').Should();

describe('greet', function() {
	it('should welcome the world') {
		greet().should.equals('Welcome World!')
	}

	it('should welcome Node') {
		greet("to Node").should.equals('Welcome to Node!')
	}
});