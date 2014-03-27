package org.bonitasoft.dojo.primefactors;

public class Factorizable {

	private int number;

	public Factorizable(int number) {
		this.number = number;
	}

	public boolean canBeFactorized() {
		return number > 1;
	}

	public boolean isFactorizableBy(int factor) {
		return number % factor == 0;
	}

	public void factorize(int factor) {
		number /= factor;
	}

	public boolean greaterOrEqualsThan(int number) {
		return this.number >= number;
	}
}
