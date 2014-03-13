package org.bonitasoft.dojo.primefactors;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorizer {

    private static final int FIRST_LEGAL_VALUE = 2;

    public List<Integer> factorize(final int number) {
        if (number < 2) {
            throw new IllegalArgumentException("0 and 1 are not allowed");
        }

        int rest = number;
        List<Integer> result = new ArrayList<Integer>();
        for (int divisor = FIRST_LEGAL_VALUE; divisor <= rest; divisor++) {
            rest = addIfDivisible(result, rest, divisor);
        }
        return result;
    }

    protected int addIfDivisible(final List<Integer> result, int number, final int divisor) {
        while (isDivisible(number, divisor)) {
            result.add(divisor);
            number /= divisor;
        }
        return number;
    }

    private boolean isDivisible(final int number, final int factor) {
        return number % factor == 0;
    }
}
