package com.edutest.stepDefinitions.api.testCenter;

import com.edutest.pages.api.testCenter.Editor;
import io.cucumber.java.en.Given;

public class EditorStepDef {

    Editor editor= new Editor();


    @Given("user creates an editor and checks if it is created")
    public void user_creates_an_editor_and_checks_if_it_is_created() {

        editor.creatingEditor();
    }

    @Given("user send get request to see all editors")
    public void user_send_get_request_to_see_all_editors() {

        editor.gettingEditorList();

    }
}
