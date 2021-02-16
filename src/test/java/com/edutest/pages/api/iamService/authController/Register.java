package com.edutest.pages.api.iamService.authController;


import static io.restassured.RestAssured.*;

import com.github.javafaker.Faker;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

public class Register {

Faker faker = new Faker();



    public void registration(){


        Map<String, String> body1= new HashMap<>();
        body1.put("email","abc@hotmail.com");
        body1.put("firstName","Abcd");
        body1.put("lastName","Def");
        body1.put("mobile","231564856");
        body1.put("password","abcdef");


        Map<String, String> body2 = new HashMap<>();
        body2.put("email",faker.internet().emailAddress());
        body2.put("firstName", faker.name().firstName());
        body2.put("lastName",faker.name().lastName());
        body2.put("mobile",String.valueOf(faker.number().digits(10)));
        body2.put("password",faker.internet().password());





            Response response =
                    given()
                            .contentType(ContentType.JSON).
                            when()
                            .body(body2).log().all().
                            and()
                            .post("IAM-SERVICE/api/auth/register").prettyPeek();

            assertEquals(201, response.getStatusCode());









    }
}
