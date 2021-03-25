package com.edutest.stepDefinitions;

import com.edutest.utilities.ConfigurationReader;
import com.edutest.utilities.Driver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import static io.restassured.RestAssured.*;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hook {

    @Before
    public void setup(Scenario scenario){
        System.out.println(scenario.getSourceTagNames());
        System.out.println(scenario.getName());
        System.out.println("BEFORE");

        if(String.valueOf(scenario.getSourceTagNames()).contains("@web")){
          //  Driver.get().get(ConfigurationReader.get("uiURL"));
            Driver.get().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            Driver.get().manage().window().maximize();
        }else if(String.valueOf(scenario.getSourceTagNames()).contains("@api")){
            baseURI= ConfigurationReader.get("base_URI");
        }else{

        }

    }

    @After
    public void teardown(Scenario scenario){

        if(String.valueOf(scenario.getSourceTagNames()).contains("@web")){
            if(scenario.isFailed()){
                TakesScreenshot takesScreenshot = (TakesScreenshot) Driver.get();
                byte[] image = takesScreenshot.getScreenshotAs(OutputType.BYTES);
                scenario.embed(image, "image/png");
            }
            Driver.closeDriver();
        }else if(String.valueOf(scenario.getSourceTagNames()).contains("@api")){
            reset();
        }else{

        }
        Driver.closeDriver();

    }
}


