package com.edutest.pages.api.testCenter;

import com.edutest.pages.api.iamService.authController.Tokens;
import com.github.javafaker.Faker;
import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import sun.rmi.transport.ObjectTable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Editor {

    String editorsEndpoint="TEST-CENTRE-SERVICE/api/editors";

   public static Map editorBody(String email,String firstName,String lastName,String mobile,String password){
       Map<String, Object>  editorBody= new HashMap<>();
       editorBody.put("email",email);
       editorBody.put("firstName",firstName);
       editorBody.put("lastName",lastName);
       editorBody.put("mobile",mobile);
       editorBody.put("password",password);

       return editorBody;
   }

   public static Map editorBodyReady(){
       Faker faker =new Faker();
       Map<String,Object> editorBody= new HashMap<>();
       editorBody.put("email",faker.internet().emailAddress());
       editorBody.put("firstName",faker.name().firstName());
       editorBody.put("lastName",faker.name().firstName());
       editorBody.put("mobile",faker.number().digits(10));
       editorBody.put("password",faker.internet().password());

       return editorBody;
   }

    public void creatingEditor(){


        Response response = given()
                                    .contentType(ContentType.JSON).header("Authorization","Bearer "+ Tokens.superAdminToken())
                                    .body(Editor.editorBodyReady()).log().all().
                            when()
                                    .post(editorsEndpoint).prettyPeek();


        //VERIFY STATUS CODE 201 AND ROLE IS EDITOR


//        Response response1 =  given()
//                .contentType(ContentType.JSON).header("Authorization","Bearer "+ Tokens.superAdminToken())
//                .body(Editor.editorBody("abcdefg6@gmail.com","Ahmet","Sahin","775386","678385429")).log().all().
//                        when()
//                .post(editorsEndpoint).prettyPeek();

    }


    public void gettingEditorList(){

       Response response= given()
                                    .contentType(ContentType.JSON).header("Authorization","Bearer "+Tokens.superAdminToken())
                                    .log().all().
                          when()
                                    .get(editorsEndpoint).prettyPeek();


       //CHECK RESPONSE AND VERIFY IT

        List editorCount= response.jsonPath().getList("data.email");
        System.out.println("Editor Count: "+ editorCount.size());

    }
}
