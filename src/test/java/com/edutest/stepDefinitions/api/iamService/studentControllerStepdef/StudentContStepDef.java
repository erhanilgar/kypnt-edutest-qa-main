package com.edutest.stepDefinitions.api.iamService.studentControllerStepdef;



import com.edutest.utilities.ConfigurationReader;

import com.github.javafaker.Faker;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.given;

import java.sql.*;

public class StudentContStepDef {
    Response response;
    String token;
    String baseURI= ConfigurationReader.get("base_URI");
    String dbUrl ="jdbc:mysql://server.serra.pw:3306";
    String dbUsername="root";
    String dbPassword="1234";
    Faker faker= new Faker();


    public StudentContStepDef() throws SQLException {
    }


    @Given("The user should be able to login as a {string}")
    public void theUserShouldBeAbleToLoginAsA(String user) {

        if(user.equals("Student")){
            token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJTVFVERU5UIl0sInN1YiI6InN0dWRlbnRAZXhhbXBsZS5jb20iLCJpYXQiOjE2MTQwNzI3ODYsImV4cCI6MTYxNDI4ODc4Nn0.ayHqp8kKn2cHNFhVbG50XNGzZ0AHQnLWCdU8bETUaPE";
        }else if(user.equals("Super Admin")){
            token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJTVVBFUl9BRE1JTiJdLCJzdWIiOiJzdXBlcmFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE1MDY4NzIyLCJleHAiOjE2MTUyODQ3MjJ9.X3-FvTMZ-7XpXQIMZt_DbmefFJ2KwOBaKqhqWSp1bFM";
        }

    }

    @When("The user get id {int}")
    public void the_user_get_id(Integer int1) {
        int id= int1;

        response = given().accept(ContentType.JSON).header("Authorization",token).
                and().pathParam("id", id)
                .when().get(baseURI + "/api/students/{id}");
        response.prettyPrint();

    }


    String apiFullName;

    @And("The users fullName should be {string}")
    public void theUsersFullNameShouldBe(String expectedName) {
        String name = response.path("data.firstName");
        String lastName= response.path("data.lastName");
        apiFullName= name+" "+lastName;
        Assert.assertEquals(expectedName,apiFullName);

    }

    @And("The user info should match database result info")
    public void theUserInfoShouldMatchDatabaseResultInfo() throws SQLException {
        Connection connection = DriverManager.getConnection(dbUrl,dbUsername,dbPassword);

        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);

        ResultSet resultSet = statement.executeQuery("SELECT * from `test-centre-service`.student s where id =13");


        ResultSetMetaData rsMetaDat = resultSet.getMetaData();
        int colCount = rsMetaDat.getColumnCount();
        Map<String, Object> row = new HashMap<>();

        while(resultSet.next()) {

            for (int i = 1; i <= colCount; i++) {
               row.put(rsMetaDat.getColumnName(i),resultSet.getObject(i));
                System.out.println("User Info = " + row.get(rsMetaDat.getColumnName(i)));

            }
        }
        String  dbFullName = row.get("first_name")+" "+row.get("last_name");
        System.out.println("fullName = " + dbFullName);

        Assert.assertEquals(apiFullName,dbFullName);

        System.out.println("-------------------------------");
        DatabaseMetaData dbMetaData=connection.getMetaData();
        System.out.println(dbMetaData.getUserName());
        System.out.println(dbMetaData.getDatabaseProductVersion());
        System.out.println(dbMetaData.getDatabaseProductVersion());


        resultSet.close();
        statement.close();
        connection.close();

    }
    @Given("The user put id {int}")
    public void the_user_put_id(Integer idNumber) throws SQLException {
        Connection connection = DriverManager.getConnection(dbUrl,dbUsername,dbPassword);

        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);

        ResultSet resultSet = statement.executeQuery("SELECT * from `test-centre-service`.student s where id =29");

        int id = idNumber;
        Map<String, Object> requestMap = new HashMap<>();

        requestMap.put("firstName", "Valentin");
        requestMap.put("lastName", "Rosier");
        requestMap.put("mobile", "0123487839");

      response=  given().accept(ContentType.JSON).and().log().all()
              .contentType(ContentType.JSON).and()
                .header("Authorization",token)
                .and()
                .body(requestMap)
                .when().put(baseURI + "/api/students/29");

        ResultSetMetaData rsMetaDat = resultSet.getMetaData();
        int colCount = rsMetaDat.getColumnCount();
        Map<String, Object> row = new HashMap<>();

        while(resultSet.next()) {

            for (int i = 1; i <= colCount; i++) {
                row.put(rsMetaDat.getColumnName(i),resultSet.getObject(i));
                System.out.println("User Info = " + row.get(rsMetaDat.getColumnName(i)));

            }
        }
        String expectedFn= (String) requestMap.get("firstName");
        String expectedLn= (String) requestMap.get("lastName");

        String expectedFullName= expectedFn+" "+expectedLn;
        System.out.println("expectedFullName = " + expectedFullName);
        String  dbFullName = row.get("first_name")+" "+row.get("last_name");
        System.out.println("fullName = " + dbFullName);

        Assert.assertEquals(expectedFullName,dbFullName);

    }
    @When("The user delete id {int}")
    public void theUserDeleteId(int id) {


      response=   given().accept(ContentType.JSON).and().header("Authorization", token)
                .when().delete(baseURI+"/api/students/" + id + "");
    }
    @Then("The status code should be {int}")
    public void the_status_code_should_be(Integer statusCode) {
        int expected= statusCode;
        System.out.println("response.statusCode() = " + response.statusCode());
        Assert.assertEquals(expected,response.statusCode());


    }

    @When("When user gets school admins")
    public void when_user_gets_school_admins() {

        response= given().accept(ContentType.JSON).header("Authorization",token)
                .when().get(baseURI + "/api/school-admin");
        response.prettyPrint();

    }


    @When("The user post user information")
    public void theUserPostUserInformation() {
        //"email": "string",
        //  "firstName": "string",
        //  "lastName": "string",
        //  "mobile": "string",
        //  "password": "string",
        //  "schoolId": 0

        Map<String,Object> requestMap = new HashMap<>();
        requestMap.put("email",faker.internet().emailAddress());
        requestMap.put("firstName",faker.name().firstName());
        requestMap.put("lastName",faker.name().lastName());
        requestMap.put("mobile","1234512345");
        requestMap.put("password","Ghezzal12!");
        requestMap.put("schoolId",300);

      response=  given().accept(ContentType.JSON).and().header("Authorization",token)
                .contentType(ContentType.JSON)
                .and().body(requestMap)
                .when().post(baseURI + "/api/school-admin");
        System.out.println("id= " + response.path("data.id"));
    }

    @When("The user should be able to get request by id {int}")
    public void theUserShouldBeAbleToGetRequestById(int id) {
        response= given().accept(ContentType.JSON).pathParam("id",id).
                and().header("Authorization",token)
                .when().get(baseURI+"/api/school-admin/{id}");
        response.prettyPrint();
    }



    @When("The user should be able to put by id {int}")
    public void theUserShouldBeAbleToPutById(int id) {
        Map<String,Object> putRequestMap = new HashMap<>();
        putRequestMap.put("firstName","Michael");
        putRequestMap.put("lastName","Sucumahir");
        putRequestMap.put("mobile","1234567890");

       response= given().accept(ContentType.JSON).and().pathParam("id",29)
                .and().header("Authorization",token)
                .and()
                .body(putRequestMap)
                .when().put(baseURI+"/api/school-admin/{id}");
       response.prettyPrint();

    }

    @When("The user should be able to delete by id {int}")
    public void theUserShouldBeAbleToDeleteById(int id) {
     response=   given().pathParam("id",id)
                .and().header("Authorization",token).when()
                .delete(baseURI+"/api/school-admin/{id}");
    }
}

