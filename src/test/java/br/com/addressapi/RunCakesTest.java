package br.com.addressapi;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by gbroveri on 28/06/15.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/cucumber"},
        glue = "br.com.addressapi.bdd",
        features = {
                "classpath:cucumber/zipcode-search.feature",
                "classpath:cucumber/crud-address.feature"
        })
public class RunCakesTest {
}