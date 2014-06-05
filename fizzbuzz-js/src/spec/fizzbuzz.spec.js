/*global describe, it */
'use strict';

(function () {
    describe('Fizzbuzz', function () {

        it('should return a number as a string', function () {
            expect(bonitasoft.fizzbuzz(2)).toBe("2");
        });

        it('should return fizz when number contains 3', function () {
            expect(bonitasoft.fizzbuzz(23)).toBe("fizz");
        });

        it('should return fizz when number is multiple of 3', function () {
            expect(bonitasoft.fizzbuzz(6)).toBe("fizz");
        });

        it('should return fizz when number contains 7', function () {
            expect(bonitasoft.fizzbuzz(370)).toBe("buzz");
        });
    });
})();
