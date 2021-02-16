package com.edutest.pages.ui;

import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.ConfigurationReader;
import com.edutest.utilities.Driver;
import com.github.javafaker.Faker;
import io.restassured.response.Response;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import java.util.*;

import static io.restassured.RestAssured.given;

public class Student {

    WebDriver driver= Driver.get();

    String email;
    String password;
    String firstName;
    String lastName;

    public Student(){PageFactory.initElements(driver,this);}

    @FindBy(xpath = "//a[contains(text(),'Register')]")
    private WebElement signUpButton;

    @FindBy(id="firstName")
    private WebElement firstNameInput;

    @FindBy(id="lastName")
    private WebElement lastNameInput;

    @FindBy(id = "region")
    private WebElement regionDropDown;

    @FindBy(xpath = "//*[@class=\"MuiAutocomplete-popper\"]")
    private WebElement regionOptions;

    @FindBy(id = "district")
    private WebElement districtDropDown;

    @FindBy(id = "school")
    private WebElement schoolDropDown;

    @FindBy(xpath = "//input[@id='class']")
    private WebElement classDropDown;

    @FindBy(css = "#branch")
    private WebElement branchDropDown;

    @FindBy(id = "email")
    private WebElement emailInput;

    @FindBy(id = "phone")
    private WebElement phoneInput;

    @FindBy(id = "password")
    private WebElement passwordInput;

    @FindBy(id = "confirm")
    private WebElement passwordConfirmInput;

    @FindBy(xpath = "//input[@name=\"agree\"]")
    private WebElement agreeCheckBox;

    @FindBy(xpath = "//span[text()=\"Register\"]")
    private WebElement registerButton;

    @FindBy(id = "email")
    private WebElement signInEmailInput;

    @FindBy(id = "password")
    private WebElement signInPasswordInput;

    @FindBy(xpath = "(//span[text()=\"Login\"])[2]")
    private WebElement loginButton;

    @FindBy(xpath = "//*[@class=\"css-calkr4\"]/div/div")
    private WebElement welcomeText;




   public  void navigateLandingPage(){
        driver.get(ConfigurationReader.get("uiURL"));
   }

   public void clickRegister(){
       signUpButton.click();
       BrowserUtils.waitFor(1/2);

   }


   public void enteringCredentials(){
       Faker faker = new Faker();

       firstName=faker.name().firstName();
        firstNameInput.sendKeys(firstName);

        lastName=faker.name().lastName();
        lastNameInput.sendKeys(lastName);

       Response response = given().get("http://server.serra.pw:9000/TEST-CENTRE-SERVICE/api/schools");

       List<Integer> regionIds = response.jsonPath().getList("data.regions.id");
       List<String>  regionsName= response.jsonPath().getList("data.regions.name");

       List<Integer> districtIds= response.jsonPath().getList("data.districts.id");
       List<String>  districtNames=response.jsonPath().getList("data.districts.name");
       List<Integer>  districtParentIds= response.jsonPath().getList("data.districts.parentId");

       List<Integer>  schoolIds=response.jsonPath().getList("data.schools.id");
       List<String> schoolNames=response.jsonPath().getList("data.schools.name");
       List<Integer>  schoolParentIds=response.jsonPath().getList("data.schools.parentId");


       int regionIndex= new Random().nextInt(regionIds.size()-1);
       int regionId=regionIds.get(regionIndex);
       String regionName= regionsName.get(regionIndex);

       List<Integer> regionsDistrictids= new ArrayList<>();
       List<String> regionsDistrictNames= new ArrayList<>();

       for (int i = 0; i <districtIds.size() ; i++) {

           if (districtParentIds.get(i)==regionId){
               regionsDistrictids.add(districtIds.get(i));
               regionsDistrictNames.add(districtNames.get(i));
           }

       }

       int distrinctIndex= new  Random().nextInt(regionsDistrictids.size()-1);

       int districtId= regionsDistrictids.get(distrinctIndex);

       String districtName=regionsDistrictNames.get(distrinctIndex);



       List<Integer> districtSchoolIds=new ArrayList<>();
       List<String>  districtSchoolName= new ArrayList<>();
       for (int i = 0; i <schoolIds.size() ; i++) {

           if (schoolParentIds.get(i)==districtId){
               districtSchoolIds.add(schoolIds.get(i));
               districtSchoolName.add(schoolNames.get(i));
           }

       }

       int schoolIndex= new Random().nextInt(districtSchoolIds.size()-1);

       int schoolId=districtSchoolIds.get(schoolIndex);
       String schoolName =districtSchoolName.get(schoolIndex);



       regionDropDown.sendKeys(regionName);
       regionOptions.click();
       BrowserUtils.waitFor(1);



       districtDropDown.sendKeys(districtName);
       regionOptions.click();
       BrowserUtils.waitFor(1);


       schoolDropDown.sendKeys(schoolName);
       regionOptions.click();
       BrowserUtils.waitFor(1);


       List<String> classes=new ArrayList<>();
       for (int i = 0; i <12 ; i++) {
           classes.add(String.valueOf(i+1));
       }


       classDropDown.sendKeys(classes.get(new Random().nextInt(classes.size()-1)));
       regionOptions.click();
       //BrowserUtils.waitFor(3);

       String[] branches= {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
       String branch=branches[new Random().nextInt(branches.length-1)];

       branchDropDown.sendKeys(branch);
       regionOptions.click();
       BrowserUtils.waitFor(2);


       email=faker.internet().emailAddress();
       emailInput.sendKeys(email);
       BrowserUtils.waitFor(1);
       phoneInput.sendKeys(faker.phoneNumber().phoneNumber());
       BrowserUtils.waitFor(1);

       password=faker.internet().password();

       passwordInput.sendKeys(password);
       BrowserUtils.waitFor(2);

       passwordConfirmInput.sendKeys(password);
       BrowserUtils.waitFor(1);


   }

   public void clickAgreeCheckbox(){
       agreeCheckBox.click();
       BrowserUtils.waitFor(1);
   }

   public void clickRegisterButton(){
       registerButton.click();
       BrowserUtils.waitFor(1);
   }




   public void enterCredentials(){

       signInEmailInput.sendKeys(email);
       BrowserUtils.waitFor(2);
       signInPasswordInput.sendKeys(password);
       BrowserUtils.waitFor(2);


   }


   public void clickLoginButton(){

       loginButton.click();
       BrowserUtils.waitFor(2);

       System.out.println("Email: "+email+" Password:  "+password);

   }

   public void verifySuccessfulLogin(){

       String expextedMessage="Student-"+firstName+" "+lastName;
       String actualMessage = welcomeText.getText();
       Assert.assertEquals(expextedMessage,actualMessage);


   }
}
