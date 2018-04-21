package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before("@smoketest")
	public void beforeValidation() {
		System.out.println("Before Smoke test");
	}

	@After("@Regtest")
	public void afterRegValidation() {
		System.out.println("After Regression test");
	}

}
