package com.edutest.stepDefinitions.ui;

import com.edutest.pages.ui.EditorPage;
import com.edutest.pages.ui.Login;
import com.edutest.pages.ui.ModeratorPage;
import com.edutest.pages.ui.SuperAdminPage;
import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.ConfigurationReader;
import com.edutest.utilities.Driver;
import com.github.javafaker.Faker;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class SuperAdminStepDef {

    WebDriver driver= Driver.get();
    Login login = new Login();
    SuperAdminPage spAdmin = new SuperAdminPage();
    Faker fk = new Faker();
    ModeratorPage moderatorPage = new ModeratorPage();
    EditorPage editorPage = new EditorPage();

    @Given("Login as a {string}")
    public void login_as_a(String role) {

        login.enterRoleCredentialsAndClickLogin(role);


    }

    @When("User click {string} and {string}")
    public void user_click_and(String menu, String add) {
        BrowserUtils.waitFor(2);
        spAdmin.navigateMenu(menu);
        BrowserUtils.waitFor(1);
        spAdmin.navigateMenu(add);
        BrowserUtils.waitFor(2);


    }



    @Then("Enter valid information and verify {string}")
    public void enterValidInformationAndVerify(String expectedText) {
        spAdmin.emailInput.sendKeys(fk.internet().emailAddress());
        spAdmin.firstNameInput.sendKeys(fk.name().firstName());
        spAdmin.lastNameInput.sendKeys(fk.name().lastName());
        spAdmin.mobileInput.sendKeys(fk.number().digits(10));
        spAdmin.passwordInput.sendKeys(ConfigurationReader.get("commonPassword"));
        spAdmin.saveButton.click();

        String actualText= spAdmin.verifyMessage.getText();
        Assert.assertEquals(expectedText,actualText);

    }

    @Then("Enter information and verify {string}")
    public void enterInformationAndVerify(String expectedText) {
        spAdmin.regionButton.click();
        BrowserUtils.waitFor(1);
        spAdmin.region5.click();
        spAdmin.districtButton.click();
        spAdmin.district2.click();
        spAdmin.schoolButton.click();
        spAdmin.school2.click();
        spAdmin.emailInput.sendKeys(fk.internet().emailAddress());
        spAdmin.firstNameInput.sendKeys(fk.name().firstName());
        spAdmin.lastNameInput.sendKeys(fk.name().lastName());
        spAdmin.mobileInput.sendKeys(fk.number().digits(10));
        spAdmin.passwordInput.sendKeys(ConfigurationReader.get("commonPassword"));
        spAdmin.saveButton.click();

        String actualText= spAdmin.verifyMessage.getText();
        Assert.assertEquals(expectedText,actualText);
    }
    String subject ="";
    String section ="";
    String examType = "";
    @Then("User enter information and click {string} and verify {string}")
    public void userEnterInformationAndClickAndVerify(String language, String expectedMessage) {

        if(expectedMessage.contains("Exam")){
            examType= moderatorPage.getExamInfo();
            moderatorPage.clickChekBox(language);
            spAdmin.saveButton.click();
            BrowserUtils.waitForVisibility(spAdmin.verifyMessage,5);
            String actualMessage= spAdmin.verifyMessage.getText();
            System.out.println("actualMessage = " + actualMessage);
            Assert.assertEquals(expectedMessage,actualMessage);
        }else {
            subject = moderatorPage.getSubjectInfo();
            spAdmin.saveButton.click();
            BrowserUtils.waitFor(2);
            BrowserUtils.waitForVisibility(spAdmin.verifyMessage,5);
            String actualMessage= spAdmin.verifyMessage.getText();
            Assert.assertEquals(expectedMessage,actualMessage);
        }

    }
    @And("User able to create section under the subject")
    public void userAbleToCreateSectionUnderTheSubject() {
        Driver.get().navigate().refresh();
        BrowserUtils.waitFor(1);
        moderatorPage.searchButton.sendKeys(subject);
        BrowserUtils.waitFor(2);
        moderatorPage.getSubject(subject).click();
        moderatorPage.insert.click();
        moderatorPage.section.click();
        section = moderatorPage.getInput2();
        spAdmin.save2.click();

    }

    @And("User able to add {string} under the section and verify {string}")
    public void userAbleToAddUnderTheSectionAndVerify(String topic, String expectedMessage) {
        Driver.get().navigate().refresh();
        BrowserUtils.waitFor(1);
        moderatorPage.searchButton.sendKeys(section);
        BrowserUtils.waitFor(2);
        moderatorPage.getSection(section).click();
        moderatorPage.insert.click();
        moderatorPage.getInput2();
        moderatorPage.addRelation.click();
        moderatorPage.getExamType("untEn");
        moderatorPage.getGrade();
        moderatorPage.getMonth("October");
        moderatorPage.save2.click();
        String actualMessage= spAdmin.verifyMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);
    }

    @And("User able to select topic {string} {string} {string}")
    public void userAbleToSelectTopic(String subject, String section, String topic) {
        editorPage.selectTopic("EXPLORER","OPERA","DINAMIK");

    }

    @And("User able to select {string} {string} and write question")
    public void userAbleToSelectAndWriteQuestion(String language, String questionType) {
        editorPage.getLanguage(language);
        editorPage.getQuestionType(questionType);
        Driver.get().switchTo().defaultContent();
        BrowserUtils.waitForVisibility(By.xpath("//iframe[@class='tox-edit-area__iframe']"),10);
        WebElement iframe= Driver.get().findElement(By.xpath("//iframe[@class='tox-edit-area__iframe']"));
        Driver.get().switchTo().frame(iframe);
        Driver.get().switchTo().defaultContent();
        BrowserUtils.waitFor(2);
        iframe.sendKeys("    Who is the best football player in the world?");
        editorPage.getIframe();
        editorPage.setClickCorrect();
        editorPage.questionLevel.click();
        editorPage.addTopicRelation("176");
        editorPage.addQuestionLevel("B");
        spAdmin.saveButton.click();



    }
}
