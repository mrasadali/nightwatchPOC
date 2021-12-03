const elements = {

        url : "https://rahulshettyacademy.com/AutomationPractice/",
        heading : "body > h1",
        dropdown : "#dropdown-class-example",
        dropdownOption : "#dropdown-class-example option[value='option1']",
        textBox : "#autocomplete",
        checkbox : "#checkBoxOption1",
        endPoint : "AutomationPractice",
        assertHeading : "Practice Page",
        textBoxValue : "Input text box",
        dropdownOption : "Option1"

    }

const checkBoxes = {
    dropdowncheckboxes: function(browser){
        browser.url(elements.url)
        browser.expect.url().to.contain(elements.endPoint);
        
        browser.waitForElementVisible(elements.heading)
        .assert.containsText(elements.heading, elements.assertHeading);
        
        browser
        .setValue(elements.textBox, elements.textBoxValue)
        .click(elements.dropdown)
        .assert.containsText(elements.dropdown, elements.dropdownOption)
        .click(elements.checkbox)
        .pause(3000)
        
        .waitForElementVisible("#opentab")
        .click("#opentab")
        .closeWindow() 
        .end();
    }

}

module.exports = {
    commands : [checkBoxes]
}