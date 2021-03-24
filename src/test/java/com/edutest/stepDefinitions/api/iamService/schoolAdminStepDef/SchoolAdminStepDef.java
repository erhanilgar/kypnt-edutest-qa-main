package com.edutest.stepDefinitions.api.iamService.schoolAdminStepDef;

import com.edutest.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.*;

public class SchoolAdminStepDef {
    Response response;
    String token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJTVVBFUl9BRE1JTiJdLCJzdWIiOiJzdXBlcmFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE1MDY4NzIyLCJleHAiOjE2MTUyODQ3MjJ9.X3-FvTMZ-7XpXQIMZt_DbmefFJ2KwOBaKqhqWSp1bFM";
    String baseURI= ConfigurationReader.get("base_URI");
    String dbUrl ="jdbc:mysql://server.serra.pw:3306";
    String dbUsername="root";
    String dbPassword="1234";


}
