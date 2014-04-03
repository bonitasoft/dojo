package org.bonitasoft.dojo.primefactors;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.jbehave.core.annotations.Given;
import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;

public class PrimeFactorizerTest {

    private PrimeFactorizer primeFactorizer;

    private List<Integer> primeFactors;

    @Given("a prime factorizer")
    public void theGameIsRunning() {
        primeFactorizer = new PrimeFactorizer();
    }

    @When("I factorize $number in prime numbers")
    public void iFactorizeNumber(final int number) {
        primeFactors = primeFactorizer.factorize(number);

    }

    @Then("I get $factors")
    public void iShouldItsFactors(final List<Integer> factors) {
        assertThat(primeFactors).containsAll(factors);
        assertThat(primeFactors.size()).isEqualTo(factors.size());
    }

    @When("I have a non factorizable number")
    public void iFactorize2() {
        primeFactors = primeFactorizer.factorize(1);

    }

    @Then("I don't get any prime factors")
    public void iShouldHaveNoFactrors() {
        assertThat(primeFactors).isEmpty();
    }

}
