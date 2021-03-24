package com.edutest.stepDefinitions.ui;

import com.edutest.pages.ui.Student;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StudentStepDef {

    Student student= new Student();
    @Given("navigate landing page")
    public void navigate_landing_page() {
        student.navigateLandingPage();
    }

    @When("user click register button")
    public void user_click_register_button() {
        student.clickRegister();
    }

    @When("enter valid credentials")
    public void enter_valid_credentials() {
        student.enteringCredentials();
    }

    @When("click I agree checkbox")
    public void click_I_agree_checkbox() {

        student.clickAgreeCheckbox();
    }

    @When("click register button")
    public void click_register_button() {

        student.clickRegisterButton();
    }

    @Then("user enter credentials in login page")
    public void user_enter_credentials_in_login_page() {

        student.enterCredentials();
    }

    @Then("click login button")
    public void click_login_button() {

        student.clickLoginButton();
    }

    @Then("verify login successful")
    public void verify_login_successful() {

        student.verifySuccessfulLogin();
    }



}
