package com.edutest.pages.ui;

import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.ConfigurationReader;
import com.edutest.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import sun.security.krb5.Config;

public class Login {

    WebDriver driver = Driver.get();



    public Login(){ PageFactory.initElements(driver,this); }

    @FindBy(id = "email")
    private WebElement signInEmailInput;

    @FindBy(id = "password")
    private WebElement signInPasswordInput;

    @FindBy(xpath = "//span[contains(text(),'Login')]")
    private WebElement loginButton;

    @FindBy(xpath = "//*[@id=\"notistack-snackbar\"]")
    private WebElement loginErrorMessage;

    @FindBy(xpath = "//*[@class=\"css-calkr4\"]/div/div")
    private WebElement welcomeText;

    @FindBy(xpath = "//*[text()=\"Sign out\"]")
    private WebElement signOutButton;



    @FindBy(xpath = "//span[contains(text(),'Sign-in')]")
    private WebElement signInButton;

    @FindBy(xpath = "//span[contains(text(),'home')]")
    private WebElement homeButton;




    public void enterInvalidCredentials(){
        String email="abc@ahjjkf.com";
        String password="abc123abc";
        signInButton.click();
        signInEmailInput.sendKeys(email);
        signInPasswordInput.sendKeys(password);
        loginButton.click();



    }

    public void vefiryLoginErrorMessage(){
        String expectedErrorMessage="Username or password not correct.";
        BrowserUtils.waitForVisibility(loginErrorMessage,10);
        String actualMessage= loginErrorMessage.getText();

        Assert.assertEquals(expectedErrorMessage,actualMessage);

    }



    public void enterRoleCredentialsAndClickLogin(String role){
        String email="";
        String password=ConfigurationReader.get("commonPassword");

        if (role.equalsIgnoreCase("superadmin")){
            email= ConfigurationReader.get("superAdminEmail");
        }else if(role.equalsIgnoreCase("moderator")){
            email=ConfigurationReader.get("moderatorEmail");

        }else if (role.equalsIgnoreCase("editor")){
            email= ConfigurationReader.get("editorEmail");
        }else if (role.equalsIgnoreCase("teacher")){
            email= ConfigurationReader.get("teacherEmail");
        }else if (role.equalsIgnoreCase("student")){
            email=ConfigurationReader.get("studentEmail");
        }else{
            System.out.println("Email or Password invalid");
        }

        signInButton.click();
        signInEmailInput.sendKeys(email);
        //BrowserUtils.waitFor(3);

        signInPasswordInput.sendKeys(password);

        loginButton.click();
        //BrowserUtils.waitFor(1);


    }


    public void verifySuccessfulLogin(String message){
        String expectedMessage=message;
        String actualMessage=welcomeText.getText().substring(0,welcomeText.getText().indexOf("-"));
        System.out.println("Actual Text: "+actualMessage);

        Assert.assertEquals(expectedMessage,actualMessage);
    }


    public void clickSignOut(){
        signOutButton.click();
        //BrowserUtils.waitFor(1);
    }

    public void verifySigedOutSuccessfully(){

        String expectedText="HOME";
        String actualText= homeButton.getText();
        Assert.assertEquals(expectedText,actualText);
    }


}
