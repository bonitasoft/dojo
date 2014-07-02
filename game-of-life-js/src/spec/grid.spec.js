/*global describe, it */
'use strict';

(function () {
    describe('Give it some context', function () {

        describe('maybe a bit more context here', function () {

            var foo;

            beforeEach(function() {
                foo = 1;
            });

            it('should run here few assertions', function () {
                expect(foo).toEqual(1);
            });

            it('should fail', function () {
                expect(4).toBeGreaterThan(5);
            });

            it('should pass', function () {
                expect(true).toBe(true);
            });

            it('should pass', function () {
                expect(true).toBe(true);
            });

            xit('should be ignored', function () {
                expect(true).toBe(false);
            });
        });

        xdescribe('again some other context but ignored', function () {
            it('should be ignored', function () {
                expect(true).not.toBe(true);
            });
        });
    });
})();
