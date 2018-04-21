package stepDefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;

//@RunWith(Cucumber.class)
public class LoginStepDefinition {

	@Given("^User open Netbanking login page$")
	public void user_open_netbanking_login_page() throws Throwable {

		System.out.println("Netbanking login page url opened");
	}

	@When("^User logins to application with UserName and Password$")
	public void user_logins_to_application_with_username_and_password() throws Throwable {
		System.out.println("User Logged in with valid username and Password");
	}

	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
		System.out.println("Home page populated");
	}

	@And("^Account details are seen$")
	public void account_details_are_seen() throws Throwable {
		System.out.println("User's Debit and Credit account details seen");
	}

	@When("^User logins to application with UserName \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void user_logins_to_application_with_username_something_and_password_something(String strArg1,
			String strArg2) throws Throwable {
		System.out.println(strArg1);
		System.out.println(strArg2);

	}

	@When("^User signup to application$")
	public void user_signup_to_application(DataTable data) throws Throwable {
		List<List<String>> obj = data.raw();
		System.out.println(obj.get(0).get(0));
		System.out.println(obj.get(0).get(1));
		System.out.println(obj.get(0).get(2));
		System.out.println(obj.get(0).get(3));

	}

	@When("^User login to application with (.+) and (.+)$")
	public void user_login_to_application_with_and(String username, String password) throws Throwable {

		System.out.println(username);
		System.out.println(password);
	}

	@Given("^User launches browser$")
	public void user_launches_browser() throws Throwable {
		System.out.println("Browser launch before running tests");
	}

	@When("^User clicked on browser icon$")
	public void user_clicked_on_browser_icon() throws Throwable {
		System.out.println("User clicks on Browser icon");
	}

	@Then("^Browser is opened$")
	public void browser_is_opened() throws Throwable {
		System.out.println("Browser opens and can be seen");
	}

}