package com.edutest.pages.ui;

import com.edutest.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ModeratorPage {
    WebDriver driver= Driver.get();
    public ModeratorPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(css = "#titleEn")
    public WebElement englishInput;

    @FindBy(css = "#titleRu")
    public WebElement russianInput;

    @FindBy(css = "#titleKz")
    public WebElement kazakInput;

    @FindBy(css = "#totalScore")
    public WebElement scoreInput;

    @FindBy(xpath = "//input[@name='EN']")
    public WebElement checkBoxEn;


    public void clickChekBox(String language){
        driver.findElement(By.xpath("//input[@name='"+language+"']")).click();
    }

}
