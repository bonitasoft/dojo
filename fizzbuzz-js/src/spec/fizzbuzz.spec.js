/*global describe, it */
'use strict';

(function () {
    describe('Fizzbuzz', function () {

        it('should return a number as a string', function () {
            expect(fizzbuzz(2)).toBe("2");
        });

        it('should return fizz when number contains 3', function () {
            expect(fizzbuzz(23)).toBe("fizz");
        });

        it('should return fizz when number is multiple of 3', function () {
            expect(fizzbuzz(6)).toBe("fizz");
        });

        it('should return buzz when number contains 7', function () {
            expect(fizzbuzz(370)).toBe("buzz");
        });

        it('should return buzz when number is multiple of 7', function () {
            expect(fizzbuzz(14)).toBe("buzz");
        });

        it('should return fizzbuzz when number is fizz and buzz', function () {
            expect(fizzbuzz(21)).toBe("fizzbuzz");
        });
    });
})();
