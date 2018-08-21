package stepdefinitions;

import org.openqa.selenium.WebDriver;

import pages.AccountPage;
import utils.driver.DriverManager;
import utils.driver.DriverManagerFactory;
import utils.driver.DriverType;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ScenarioHooks {
	protected DriverManager driverManager;
	protected WebDriver driver;

	@Before
	public void beforeScenario() {
		driverManager = DriverManagerFactory.getManager(DriverType.CHROME);
		driver = driverManager.getWebDriver();
	}

	@After
	public void afterScenario() {
		(new AccountPage(driver)).clickLogOut();
		driverManager.quitDriver();
	}

}
