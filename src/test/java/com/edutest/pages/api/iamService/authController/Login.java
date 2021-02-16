package com.edutest.pages.api.iamService.authController;


import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Login {



    public void loginWithValidCredentials(){

       // String superAdmin="{\"email\":\"superadmin@kypnt.com\",\"password\":\"superadmin\"}";

        Map<String,Object> user= new HashMap<>();
        List<String> userList= new ArrayList<>();
        userList.add("superadmin@example.com");
        userList.add("moderator@example.com");
        userList.add("editor@example.com");
        userList.add("teacher@example.com");
        userList.add("student@example.com");
        String password= "Test123456!";


        for (int i = 0; i <userList.size() ; i++) {
            user.put("email",userList.get(i));
            user.put("password",password);

            String role= userList.get(i).substring(0,userList.get(i).indexOf('@')).toUpperCase();

            System.out.println("This is "+(i+1)+"th user and role is: "+ role);

            Response response= given()
                    .contentType(ContentType.JSON).
                            when()
                    .body(user).log().all().
                            and()
                    .post("IAM-SERVICE/api/auth/login").prettyPeek();

            assertEquals(200, response.getStatusCode());



            String token = response.jsonPath().getString("data.token");

           // System.out.println("Token: "+ token);

            assertNotNull(token);

            int expectedId = 4;
            int actualId= response.jsonPath().getInt("data.id");

            //assertEquals(expectedId,actualId);

            user.clear();

            System.out.println("////////////////////////////////////////////////////////////////////////////////////////////");

        }



    }


}
