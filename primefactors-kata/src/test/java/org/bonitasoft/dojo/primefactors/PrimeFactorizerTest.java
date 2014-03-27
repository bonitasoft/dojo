package org.bonitasoft.dojo.primefactors;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class PrimeFactorizerTest {

	private PrimeFactorizer primeFactorizer;

	@Before
	public void initFactorizer() {
		primeFactorizer = new PrimeFactorizer();
	}

	@Test
	public void numbers_smaller_than_2_does_not_have_any_primefactors() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(1);

		assertThat(primeFactors).isEmpty();
	}

	@Test
	public void prime_factor_of_2_is_2() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(2);

		assertThat(primeFactors).containsOnly(2);
	}

	@Test
	public void prime_factor_of_3_is_3() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(3);

		assertThat(primeFactors).containsOnly(3);
	}

	@Test
	public void prime_factors_of_4_are_2_and_2() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(4);

		assertThat(primeFactors).containsExactly(2, 2);
	}

	@Test
	public void prime_factors_of_6_are_3_and_2() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(6);

		assertThat(primeFactors).containsOnly(3, 2);
	}

	@Test
	public void prime_factors_of_9_are_3_and_3() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(9);

		assertThat(primeFactors).containsExactly(3, 3);
	}

	@Test
	public void prime_factors_of_330_are_11_2_3_and_5() throws Exception {
		List<Integer> primeFactors = primeFactorizer.factorize(330);

		assertThat(primeFactors).containsOnly(11, 2, 3, 5);
	}
}
