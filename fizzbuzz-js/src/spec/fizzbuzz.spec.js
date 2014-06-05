/*global describe, it */
'use strict';

(function () {
    describe('Fizzbuzzer', function () {

        it('should return the given number in string', function () {
            var number = fizzbuzzer.fizzbuzz(4);

            expect(number).toBe(4);
        });

        it('should return FIZZ when number is 3', function () {
            var number = fizzbuzzer.fizzbuzz(3);

            expect(number).toBe("FIZZ");
        });

        it('should return FIZZ when number is 13', function () {
            var number = fizzbuzzer.fizzbuzz(13);

            expect(number).toBe("FIZZ");
        });

        it('should return BUZZ when number is 7', function () {
            var number = fizzbuzzer.fizzbuzz(7);

            expect(number).toBe("BUZZ");
        });

        it('should return BUZZ when number is 17', function () {
            var number = fizzbuzzer.fizzbuzz(17);

            expect(number).toBe("BUZZ");
        });

        it('should return FIZZBUZZ when number is 21', function () {
            var number = fizzbuzzer.fizzbuzz(21);

            expect(number).toBe("FIZZBUZZ");
        });

        it('should return 100 when number is 100', function () {
            var number = fizzbuzzer.fizzbuzz(100);

            expect(number).toBe(100);
        });
    });
})();
