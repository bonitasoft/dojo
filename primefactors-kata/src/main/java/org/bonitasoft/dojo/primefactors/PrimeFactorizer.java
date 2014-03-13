package org.bonitasoft.dojo.primefactors;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PrimeFactorizer {

	public List<Integer> factorize(int number) {
        if(number < 2) {
            return  Collections.emptyList();
        }
        List<Integer> list = new ArrayList<Integer>();
        for(int i = 2; i < number; i++) {
            if (divide(number, list, i)) {
                return list;
            }
        }
        list.add(number);
        return list;
	}

    private boolean isPrimeNumber(int i) {
        return factorize(i).size() == 1;
    }

    private boolean divide(int number, List<Integer> list, int i) {
        if(isPrimeNumber(i) && number % i == 0) {
            list.add(i);
            list.addAll(factorize(number / i));
            return true;
        }
        return false;
    }
}
