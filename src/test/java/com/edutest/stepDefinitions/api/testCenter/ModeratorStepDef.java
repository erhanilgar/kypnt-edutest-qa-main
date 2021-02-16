package com.edutest.stepDefinitions.api.testCenter;

import com.edutest.pages.api.testCenter.Moderator;
import io.cucumber.java.en.Given;

public class ModeratorStepDef {

    Moderator moderator= new Moderator();

    @Given("user creates a moderator and checks if it is created")
    public void user_creates_a_moderator_and_checks_if_it_is_created() {

        moderator.creatingModerator();

    }

    @Given("user send get request to see all moderators")
    public void user_send_get_request_to_see_all_moderators() {

        moderator.gettingModeratorList();

    }
}
