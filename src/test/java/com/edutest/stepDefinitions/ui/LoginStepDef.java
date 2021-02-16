package com.edutest.stepDefinitions.ui;

import com.edutest.pages.ui.Login;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {

    Login login = new Login();

    @When("input invalid email and password then click login")
    public void input_invalid_email_and_password_then_click_login() {
        login.enterInvalidCredentials();
    }

    @Then("verify error message")
    public void verify_error_message() {
        login.vefiryLoginErrorMessage();
    }

    @When("enter {string} credentials then click login")
    public void enter_credentials_then_click_login(String role) {
        login.enterRoleCredentialsAndClickLogin(role);

    }

    @Then("verify Welcome {string}")
    public void verify_Welcome(String welcomeText) {
        login.verifySuccessfulLogin(welcomeText);

    }

    @When("click Sign out")
    public void click_Sign_out() {
        login.clickSignOut();
    }

    @Then("verify logged out successfuly")
    public void verify_logged_out_successfuly() {
        login.verifySigedOutSuccessfully();
    }
}
