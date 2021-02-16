package com.edutest.stepDefinitions.api.iamService.authControllerStepDef;

import com.edutest.pages.api.iamService.authController.Register;
import io.cucumber.java.en.Given;

public class SignUp {

    Register register = new Register();

    @Given("send post request with valid body and verify with status code")
    public void send_post_request_with_valid_body_and_verify_with_status_code() {


        register.registration();
    }

}
