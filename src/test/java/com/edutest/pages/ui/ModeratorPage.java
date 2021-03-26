package com.edutest.pages.ui;

import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.Driver;
import com.github.javafaker.Faker;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.Random;

public class ModeratorPage {

    WebDriver driver = Driver.get();
    public ModeratorPage(){
        PageFactory.initElements(driver,this);
    }
    Faker fk = new Faker();
    Random rn = new Random();

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

    @FindBy(xpath = "//input[@placeholder='Search subject/section']")
    public WebElement searchButton;

    @FindBy(xpath = "//span[contains(text(),'Insert')]")
    public WebElement insert;

    @FindBy(xpath = "//input[@value='section']")
    public WebElement section;

    @FindBy(xpath = "//input[@value='topic']")
    public WebElement topic;

    @FindBy(xpath = "(//input[@id='titleEn'])[2]")
    public WebElement englishInput2;

    @FindBy(xpath = "(//input[@id='titleRu'])[2]")
    public WebElement russianInput2;

    @FindBy(xpath = "(//input[@id='titleKz'])[2]")
    public WebElement kazakInput2;

    @FindBy(xpath = "//span[contains(text(),'Add relation')]")
    public WebElement addRelation;

    @FindBy(xpath = "//select[@id='relations[0].examTypeId']")
    public WebElement examType;

    @FindBy(xpath = "//div[@id='select-outlined']")
    public WebElement grade;

    @FindBy(css = "#months-select-outlined")
    public WebElement month;



    public void clickChekBox(String language){
        Driver.get().findElement(By.xpath("//input[@name='"+language+"']")).click();
    }

    public String getExamInfo(){
        String examType= fk.food().fruit();
        englishInput.sendKeys(fk.animal().name());
        russianInput.sendKeys(fk.animal().name());
        kazakInput.sendKeys(fk.animal().name());
        scoreInput.sendKeys("100");

        return examType;

    }
    public String getSubjectInfo(){
        String subject = fk.name().firstName();
        englishInput.sendKeys(subject);
        russianInput.sendKeys(fk.name().username());
        kazakInput.sendKeys(fk.name().title());

        return subject;
    }
    public WebElement getSubject(String name){
        WebElement element = Driver.get().findElement(By.xpath("//span[@type='subject' or contains(text(),'"+name+"')]"));

        return element;

    }

    public String getInput2(){

        String section= fk.animal().name();
        englishInput2.sendKeys(section);
        russianInput2.sendKeys(fk.animal().name());
        kazakInput2.sendKeys(fk.animal().name());

        return section;
    }
    public WebElement getSection(String section){
        BrowserUtils.waitFor(1);
    WebElement element=  Driver.get().findElement(By.xpath("(//span[@type='subject'])[2]"));
      return element;
    }

    public void getExamType(String textName){
        int num=rn.nextInt(70)+1;

        Select select = new Select(examType);
        select.selectByVisibleText(textName);

    }
    public void getGrade(){
        int num=rn.nextInt(11)+1;
        grade.click();
        Driver.get().findElement(By.xpath("//li[normalize-space()='"+num+"']")).click();
    }

    public void getMonth(String monthName){
        month.click();
        Driver.get().findElement(By.xpath("//li[normalize-space()='"+monthName+"']")).click();
    }

}
