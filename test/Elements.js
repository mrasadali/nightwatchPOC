describe("Elements testing", function(){
    
    test("Should include the checkboxes to click", function(browser){

        const url = "https://rahulshettyacademy.com/AutomationPractice/"
        const heading = "body > h1"
        const dropdown = "#dropdown-class-example"
        const dropdownOption = "#dropdown-class-example option[value='option1']"
        const textBox = "#autocomplete"
        const checkbox = "#checkBoxOption1"

        browser.
        url(url);
        browser.expect.url().to.contain("AutomationPractice");
        
        browser.waitForElementVisible(heading)
        .assert.containsText(heading, "Practice Page");
        
        browser
        .setValue(textBox, "Input text box")
        .click(dropdownOption)
        .assert.containsText(dropdown, "Option1")
        .click(checkbox)
        .pause(3000)
        
        .waitForElementVisible("#opentab")
        .click("#opentab")
        .closeWindow() 
        .end();
    })
})