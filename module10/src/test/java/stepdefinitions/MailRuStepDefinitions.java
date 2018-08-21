package stepdefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import pages.AccountPage;
import pages.HomePage;
import bo.Email;
import bo.User;
import services.EmailService;
import utils.driver.DriverManager;
import utils.driver.DriverManagerFactory;
import utils.driver.DriverType;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MailRuStepDefinitions {
	private static final String MAILRU_URL = "https://mail.ru/";

	private static final String MAIL_TO_ADDRESS = "vra_atmmodule6@mail.ru";
	private static long currentKey = System.currentTimeMillis();
	private static final String SUBJECT = "TestSubject" + currentKey;
	private static final String TEXT_BODY = "TestTextBody" + currentKey;

	private DriverManager driverManager;
	private WebDriver driver;
	private String subjectDeleteIncomingMail;
	private EmailService emailService = new EmailService();

	private Email email = new Email.EmailBuilder(MAIL_TO_ADDRESS)
			.withSubject(SUBJECT).withBody(TEXT_BODY).build();

	@Given("I open mail.ru")
	public void openSite() {
		driverManager = DriverManagerFactory.getManager(DriverType.CHROME);
		driver = driverManager.getWebDriver();
		driver.get(MAILRU_URL);
	}
	
	@When("^I set ([a-zA-Z0-9_/-]{3,20}) and ([a-zA-Z0-9_/-/.!@#$%&*]{3,20})$")
	public void setLoginPassword(String login, String password) {
		User user = new User(login, password);
		HomePage homePage = new HomePage(driver);
		homePage.setUserName(user);
		homePage.setUserPassword(user);
		homePage.clickSubmitBtn();
	}

	@Then("I login into account with ([a-zA-z0-9]+@[a-zA-z0-9]+\\.[a-zA-z]{2,10})")
	public void iCheckEmailIntoAccount(String emailAddess) {
		Assert.assertTrue((new AccountPage(driver)).isTextPresentOnPage(emailAddess));
	}
	
	@When("I login to account by User:")
	public void login(DataTable table) {
		List<Map<String, String>> users = table.asMaps(String.class,
				String.class);
		String email = users.get(0).get("email");
		User user = new User(users.get(0).get("login"), users.get(0).get(
				"password"));
		Assert.assertTrue(emailService.isLogin(user, email));
	}

	@And("I create email")
	public void iCreateEmail() {
		emailService.createEmail(email);
	}

	@Then("I check if email exists in Draft")
	public void iCheckIfEmailExistsInDraft() {
		emailService.isEmailInDraftFolder(email);
	}

	@And("I open email with index ([0-9]{1,2}) in Draft folder")
	public void iOpenEmailInDraftFolder(int index) {
		emailService.openDraftEmail(index);
	}

	@And("^I send email$")
	public void iSendEmail() {
		emailService.sendEmail(email);
		emailService.refreshPage();
	}

	@Then("^I check that email exists in Sent folder$")
	public void iCheckThatEmailExistsInSentFolder() {
		emailService.isEmailInSentFolder(email);
	}
	
	@And("^I logout$")
	public void iLogout() {
		AccountPage accountPage = PageFactory.initElements(
				driverManager.getWebDriver(), AccountPage.class);
		accountPage.clickLogOut();
	}

	@Then("^I see email in Incoming folder$")
	public void iSeeEmailWithIndexInIncomingFolder() {
		Assert.assertTrue(emailService.checkEmailInIncomingFolder(email));
	}

	@And("^I delete Incoming mail with index ([0-9]{1,2})$")
	public String iDeleteIncomingMailWithIndex(int index) {
		subjectDeleteIncomingMail = emailService.getIncomingEmailSubject(index);
		emailService.deleteIncomingMail(index);
		emailService.refreshPage();
		return subjectDeleteIncomingMail;
	}

	@Then("^I check that email exists in Basket$")
	public void iCheckThatEmailExistsInBasket() {
		Assert.assertTrue(emailService
				.checkSubjectlInBasket(subjectDeleteIncomingMail));
	}

}
