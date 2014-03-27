package org.bonitasoft.dojo.primefactors;

import static java.util.Collections.emptyList;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorizer {

	public List<Integer> factorize(final int number) {
		Factorizable factorizable = new Factorizable(number);
		if (factorizable.canBeFactorized())
			return factorize(factorizable);
		else
			return emptyList();
	}

	private List<Integer> factorize(Factorizable factorizable) {
		List<Integer> factors = new ArrayList<Integer>();
		for (int factor = 2; factorizable.greaterOrEqualsThan(factor); factor++) {
			while (factorizable.isFactorizableBy(factor)) {
				factors.add(factor);
				factorizable.factorize(factor);
			}
		}
		return factors;
	}
}
