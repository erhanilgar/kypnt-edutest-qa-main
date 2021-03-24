package com.edutest.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "pretty",
                "json:target/cucumber.json",
                "html:target/default-cucumber-reports"
        },
        features = {"src/test/resources/features"},
        glue = {"com/edutest/stepDefinitions/"},
        tags = {"@demo"},
        dryRun = true
)
public class CukesRunner {
}
