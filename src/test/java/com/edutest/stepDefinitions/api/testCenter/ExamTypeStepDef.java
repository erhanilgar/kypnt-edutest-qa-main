package com.edutest.stepDefinitions.api.testCenter;

import com.edutest.pages.api.testCenter.ExamType;
import io.cucumber.java.en.Given;

public class ExamTypeStepDef {
ExamType examType= new ExamType();

    @Given("user send get request to see exam type list")
    public void user_send_get_request_to_see_exam_type_list() {
      examType.getExamTypeList();

    }

    @Given("user send Post request with valid exam type body and verify it")
    public void user_send_Post_request_with_valid_exam_type_body_and_verify_it() {

        examType.examtypeCreation();

    }
}
