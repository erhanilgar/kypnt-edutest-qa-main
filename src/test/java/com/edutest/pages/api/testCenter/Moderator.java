package com.edutest.pages.api.testCenter;

import com.edutest.pages.api.iamService.authController.Tokens;
import com.github.javafaker.Faker;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class Moderator {

    String moderatorEndPoint="TEST-CENTRE-SERVICE/api/moderators";


    public static Map moderatorBody(String email, String firstName, String lastName, String mobile, String password){
        Map<String, Object>  editorBody= new HashMap<>();
        editorBody.put("email",email);
        editorBody.put("firstName",firstName);
        editorBody.put("lastName",lastName);
        editorBody.put("mobile",mobile);
        editorBody.put("password",password);

        return editorBody;
    }

    public static Map moderatorBodyReady(){
        Faker faker =new Faker();
        Map<String,Object> editorBody= new HashMap<>();
        editorBody.put("email",faker.internet().emailAddress());
        editorBody.put("firstName",faker.name().firstName());
        editorBody.put("lastName",faker.name().firstName());
        editorBody.put("mobile",faker.number().digits(10));
        editorBody.put("password",faker.internet().password());

        return editorBody;
    }

    public void creatingModerator(){
        Response response = given()
                .contentType(ContentType.JSON).header("Authorization","Bearer "+ Tokens.superAdminToken())
                .body(Moderator.moderatorBodyReady()).log().all().
                        when()
                .post(moderatorEndPoint).prettyPeek();


        //VERIFY STATUS CODE 201 AND ROLE IS EDITOR

    }


    public void gettingModeratorList(){

        Response response= given()
                .contentType(ContentType.JSON).header("Authorization","Bearer "+Tokens.superAdminToken())
                .log().all().
                        when()
                .get(moderatorEndPoint).prettyPeek();

        List moderatorCount= response.jsonPath().getList("data.email");
        System.out.println("Moderator count:"+ moderatorCount.size());


        //CHECK RESPONSE AND VERIFY IT

    }


}
