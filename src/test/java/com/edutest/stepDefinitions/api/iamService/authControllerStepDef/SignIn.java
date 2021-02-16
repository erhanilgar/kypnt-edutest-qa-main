package com.edutest.stepDefinitions.api.iamService.authControllerStepDef;

import com.edutest.pages.api.iamService.authController.Login;
import io.cucumber.java.en.Given;

public class SignIn {

    Login login = new Login();

    @Given("send post request with valid email and password and verify")
    public void send_post_request_with_valid_email_and_password_and_verify() {

        login.loginWithValidCredentials();

    }
}
