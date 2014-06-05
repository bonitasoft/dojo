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
    });
})();
