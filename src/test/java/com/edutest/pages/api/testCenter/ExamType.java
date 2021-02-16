package com.edutest.pages.api.testCenter;

import static io.restassured.RestAssured.*;

import com.github.javafaker.Faker;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class ExamType {

    String endPoint="TEST-CENTRE-SERVICE/api/examtypes";

    public void getExamTypeList(){

        Random random = new Random();

        String[] languages= {"EN","RU","KZ"};
        int size= languages.length;
        int index= random.nextInt(size);
        String language= languages[index];

        Response response = given()
                                    .contentType(ContentType.JSON).queryParam("language",language).log().all().
                            when()
                                    .get(endPoint).prettyPeek();

        assertEquals(200,response.getStatusCode());

    }



    public void examtypeCreation(){
        Random random = new Random();

        Faker faker = new Faker();

        String[] languages= {"EN","RU","KZ"};
        int size= languages.length;
        int index= random.nextInt(size);
        String language= languages[index];
        Map<String,Object> body2 = new HashMap<>();
        Map<String, Object> map = new HashMap<>();

        String[] languageArray= new String[3];
        languageArray[0]=language;
        random = new Random();
        index= random.nextInt(size);
         language= languages[index];

        languageArray[1]=language;
        random = new Random();
        index= random.nextInt(size);
       language= languages[index];

        languageArray[2]=language;



        body2.put("languages", languageArray);
        body2.put("titleEn",faker.book().title());
        body2.put("titleRu",faker.book().title());
        body2.put("titleKz",faker.book().title());
        body2.put("totalScore",Long.parseLong(faker.number().digits(9)));

        Response response = given()
                                    .contentType(ContentType.JSON).body(body2).log().all().
                            when()
                                    .post(endPoint).prettyPeek();

        assertEquals(201, response.getStatusCode());

    }

}
