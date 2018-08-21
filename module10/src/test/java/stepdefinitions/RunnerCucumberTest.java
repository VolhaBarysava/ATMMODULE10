package stepdefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features="src/test/resources/features",    
        plugin = {
                "pretty", "json:target/Cucumber.json",
                "html:target/cucumber-html-report"
        }
)


public class RunnerCucumberTest {}
//public class RunnerCucumberTest extends AbstractTestNGCucumberTests {}
