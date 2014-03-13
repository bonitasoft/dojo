package org.bonitasoft.dojo.primefactors;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Test;

public class PrimeFactorizerTest {

    @Test(expected = IllegalArgumentException.class)
    public void factorize_should_throw_exception_if_0() throws Exception {
        new PrimeFactorizer().factorize(0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void factorize_should_throw_exception_if_1() throws Exception {
        new PrimeFactorizer().factorize(1);
    }

    @Test
    public void factorize_2_should_return_2() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(2);
        assertThat(factorize).containsExactly(2);
    }

    @Test
    public void factorize_4_should_return_2_2() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(4);
        assertThat(factorize).containsOnly(2, 2);
    }

    @Test
    public void factorize_6_should_return_2_3() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(6);
        assertThat(factorize).containsOnly(2, 3);
    }

    @Test
    public void factorize_15_should_return_3_5() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(15);
        assertThat(factorize).containsOnly(3, 5);
    }

    @Test
    public void factorize_13_should_return_13() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(13);
        assertThat(factorize).containsOnly(13);
    }

    @Test
    public void factorize_82_should_return_2_41() throws Exception {
        List<Integer> factorize = new PrimeFactorizer().factorize(82);
        assertThat(factorize).containsOnly(2, 41);
    }
}
