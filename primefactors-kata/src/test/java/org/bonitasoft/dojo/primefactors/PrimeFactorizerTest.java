package org.bonitasoft.dojo.primefactors;


import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class PrimeFactorizerTest {

    PrimeFactorizer factorizer = new PrimeFactorizer();

    @Test
    public void should_return_an_empty_list_when_factorize_1() throws Exception {
        assertThat(factorizer.factorize(1)).isEmpty();
    }

    @Test
    public void should_return_2_when_factorize_2() throws Exception {
        assertThat(factorizer.factorize(2)).containsOnly(2);
    }

    @Test
    public void should_return_2_2_when_factorize_4() throws Exception {
        assertThat(factorizer.factorize(4).toString()).isEqualTo("[2, 2]");
    }

    @Test
    public void should_return_2_3_when_factorize_6() throws Exception {
        assertThat(factorizer.factorize(6).toString()).isEqualTo("[2, 3]");
    }

    @Test
    public void should_return_3_3_when_factorize_9() throws Exception {
        assertThat(factorizer.factorize(9).toString()).isEqualTo("[3, 3]");
    }

    @Test
    public void should_return_5_5_when_factorize_25() throws Exception {
        assertThat(factorizer.factorize(25).toString()).isEqualTo("[5, 5]");
    }

    @Test
    public void should_return_2_3_5_when_factorize_30() throws Exception {
        assertThat(factorizer.factorize(30).toString()).isEqualTo("[2, 3, 5]");
    }

    @Test
    public void should_return_2_7_when_factorize_14() throws Exception {
        assertThat(factorizer.factorize(14).toString()).isEqualTo("[2, 7]");
    }

    @Test
    public void should_return_2_3_5_7_11_when_factorize_2310() throws Exception {
        assertThat(factorizer.factorize(2310).toString()).isEqualTo("[2, 3, 5, 7, 11]");
    }
//    @Test
//    public void should_return_2_3_5_when_factorize_30() throws Exception {
//
//    }
}
