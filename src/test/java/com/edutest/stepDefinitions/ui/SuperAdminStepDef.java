package com.edutest.stepDefinitions.ui;

import com.edutest.pages.ui.Login;
import com.edutest.pages.ui.ModeratorPage;
import com.edutest.pages.ui.SuperAdminPage;
import com.edutest.utilities.BrowserUtils;
import com.edutest.utilities.ConfigurationReader;
import com.github.javafaker.Faker;
import io.cucumber.java.en.*;
import org.junit.Assert;


public class SuperAdminStepDef {

    Login login = new Login();
    SuperAdminPage spAdmin = new SuperAdminPage();
    Faker fk = new Faker();
    ModeratorPage moderatorPage = new ModeratorPage();

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

    @Then("User enter information and click {string} and verify {string}")
    public void userEnterInformationAndClickAndVerify(String language, String expectedMessage) {

        moderatorPage.englishInput.sendKeys(fk.backToTheFuture().character());
        moderatorPage.russianInput.sendKeys(fk.backToTheFuture().character());
        moderatorPage.kazakInput.sendKeys(fk.backToTheFuture().character());
        moderatorPage.scoreInput.sendKeys("100");
        moderatorPage.clickChekBox(language);
        spAdmin.saveButton.click();
        String actualText= spAdmin.verifyMessage.getText();
        Assert.assertEquals(expectedMessage,actualText);



    }
}
