package com.edutest.pages.api.iamService.authController;

import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

public class Tokens {

    public static String superAdminToken(){

        Map<String, Object> credentials= new HashMap<>();
        credentials.put("email","superadmin@example.com");
        credentials.put("password","Test123456!");



//        credentials.put("email","abc@abc.co");
//        credentials.put("password","abc123");

        Response response =given().contentType(ContentType.JSON).and().body(credentials).post("http://server.serra.pw:9000/IAM-SERVICE/api/auth/login");

        return  response.jsonPath().getString("data.token");
    }

    public static String moderatorToken(){

        Map<String, Object> credentials= new HashMap<>();
        credentials.put("email","moderator@example.com");
        credentials.put("password","Test123456!");


        Response response =given().contentType(ContentType.JSON).and().body(credentials).post("IAM-SERVICE/api/auth/login");

        return response.jsonPath().getString("data.token");
    }

    public static String editorToken(){

        Map<String, Object> credentials= new HashMap<>();
        credentials.put("email","editor@example.com");
        credentials.put("password","Test123456!");


        Response response =given().contentType(ContentType.JSON).and().body(credentials).post("IAM-SERVICE/api/auth/login");

        return response.jsonPath().getString("data.token");
    }
    public static String teacherToken(){

        Map<String, Object> credentials= new HashMap<>();
        credentials.put("email","teacher@example.com");
        credentials.put("password","Test123456!");


        Response response =given().contentType(ContentType.JSON).and().body(credentials).post("IAM-SERVICE/api/auth/login");

        return response.jsonPath().getString("data.token");
    }

    public static String studentToken(){

        Map<String, Object> credentials= new HashMap<>();
        credentials.put("email","student@example.com");
        credentials.put("password","Test123456!");


        Response response =given().contentType(ContentType.JSON).and().body(credentials).post("IAM-SERVICE/api/auth/login");

        return response.jsonPath().getString("data.token");
    }

}
