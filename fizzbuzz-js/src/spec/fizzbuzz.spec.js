/*global describe, it */

(function () {
	describe('maybe a bit more context here', function () {

		it('should 1 return 1', function () {
			expect(fizzbuzz(1)).toBe("1");
		});

		it('should 3 return fizz', function () {
			expect(fizzbuzz(3)).toBe("fizz");
		});

		it('should 7 return buzz', function () {
			expect(fizzbuzz(7)).toBe("buzz");
		});

		xit('should be ignored', function () {
			expect(true).toBe(false);
		});
	});

})();
