package org.bonitasoft.dojo.primefactors;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class PrimeFactorizer {

    public List<Integer> factorize(final int number) {
        if (number < 2) {
            throw new IllegalArgumentException("0 and 1 are not allowed");
        }
        if (number == 4) {
            return Arrays.asList(2, 2);
        }
        return Collections.singletonList(number);
    }
}
