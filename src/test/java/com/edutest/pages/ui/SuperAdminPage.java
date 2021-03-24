package com.edutest.pages.ui;

import com.edutest.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class SuperAdminPage {
    WebDriver driver= Driver.get();
    public SuperAdminPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//span[contains(text(),'Moderators')]")
    public WebElement moderator;

    @FindBy(xpath = "//div[@id='notistack-snackbar']")
    public WebElement verifyMessage;

    @FindBy(id = "email")
    public WebElement emailInput;

    @FindBy(id = "firstName")
    public WebElement firstNameInput;

    @FindBy(id = "lastName")
    public WebElement lastNameInput;

    @FindBy(xpath = "//input[contains(@id,'mobile')]")
    public WebElement mobileInput;

    @FindBy(id = "password")
    public WebElement passwordInput;

    @FindBy(xpath = "//span[contains(text(),'Save')]")
    public WebElement saveButton;

    @FindBy(xpath = "//div[@name='region']//button[@title='Open']//span[@class='MuiIconButton-label']//*[local-name()='svg']")
    public WebElement regionButton;

    @FindBy(xpath = "//li[@id='region-option-5']")
    public WebElement region5;

    @FindBy(xpath = "//div[@name='district']//button[@title='Open']//span[@class='MuiIconButton-label']//*[local-name()='svg']")
    public WebElement districtButton;

    @FindBy(xpath = "//li[@id='district-option-2']")
    public WebElement district2;

    @FindBy(xpath = "//div[@name='school']//button[@title='Open']//span[@class='MuiIconButton-label']//*[local-name()='svg']//*[name()='path' and contains(@d,'M7 10l5 5 ')]")
    public WebElement schoolButton;

    @FindBy(xpath ="//li[@id='school-option-2']" )
    public WebElement school2;


    public void navigateMenu(String menuName){
        driver.findElement(By.xpath("//span[contains(text(),'"+menuName+"')]")).click();
    }
}
