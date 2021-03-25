package com.edutest.pages.ui;

import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class EditorPage {
    public EditorPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    WebDriver driver= Driver.get();
    Random rn= new Random();
    @FindBy(xpath = "//span[normalize-space()='CHEMISTEN']")
    public WebElement chemist;

    @FindBy(xpath = "(//span[@class='css-phpgo'])[1]")
    public WebElement select;

    @FindBy(css = "#outlined-language-native-simple")
    public WebElement languageType;

    @FindBy(css = "#outlined-questionType-native-simple")
    public WebElement questionType;

    @FindBy(xpath = "//span[contains(text(),'Add Choice')]")
    public WebElement addChoice;

    @FindBy(xpath = "//div[contains(text(),'A')]")
    public WebElement choiceA;

    @FindBy(xpath = "//span[contains(text(),'Add Question Level')]")
    public WebElement questionLevel;

    @FindBy(xpath = "//select[@id='questionLevels[0].topicRelationId']")
    public WebElement topicRelation;

    @FindBy(xpath = "//select[@id='questionLevels[0].questionLevel']")
    public WebElement addLevel;

    @FindBy(xpath = "//div[contains(text(),'B')]")
    public WebElement clickCorrect;

    public void selectTopic(String subject, String section,String topic){
        BrowserUtils.clickWithJS(Driver.get().findElement(By.xpath("//span[normalize-space()='"+subject+"']")));
        Driver.get().findElement(By.xpath("//span[normalize-space()='"+section+"']")).click();
        BrowserUtils.waitFor(1);
        WebElement topic1= Driver.get().findElement(By.xpath("//span[normalize-space()='"+topic+"']"));
        BrowserUtils.hover(topic1);
        select.click();


    }
    public void getLanguage(String language){
        Select select = new Select(languageType);
        select.selectByVisibleText(language);
    }
    public void getQuestionType(String type){
        Select select = new Select(questionType);
        select.selectByVisibleText(type);
    }
    public void addTopicRelation(String value){
        Select select = new Select(topicRelation);
        select.selectByValue(value);
    }
    public void addQuestionLevel(String value){
        Select select = new Select(addLevel);
        select.selectByValue(value);
    }

    public void getIframe(){
        List<String> choices = new ArrayList<>();
        choices.add("Messi");
        choices.add("Ronaldo");
        choices.add("Zlatan");
        choices.add("Abubakar");
        choices.add("Hakan Sukur");
        choices.add("Harry Kane");
        choices.add("Mbappbe");
        choices.add("Neymar");
        int num=1;
        for (int i = 0; i <choices.size() ; i++) {
            addChoice.click();
            //BrowserUtils.waitFor(1);
            WebElement choice= driver.findElement(By.xpath("(//div[starts-with(@id,'tiny')])["+num+"]"));
            //BrowserUtils.waitFor(1);
            choice.sendKeys(choices.get(i));
            num++;
        }

    }
    public void setClickCorrect(){
        String choice="";
        List<String> letter = new ArrayList<>();
        letter.add("A");
        letter.add("B");
        letter.add("C");
        letter.add("D");
        letter.add("E");
        letter.add("F");
        letter.add("G");
        letter.add("H");
        for (int i = 0; i <6 ; i++) {
            choice=letter.get(rn.nextInt(8));
            driver.findElement(By.xpath("//div[contains(text(),'"+choice+"')]")).click();
            System.out.println("choice = " + choice);
        }
    }
}
