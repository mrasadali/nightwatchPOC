const elements = {
        url : "https://rahulshettyacademy.com/AutomationPractice/",
        alertBoxInput : "#name",
        alertButton : "#alertbtn",
        confirmButton : "#confirmbtn",
        textBoxVisible : "#displayed-text"

}
const customerCommands = {
    // select credit memo type
    textBoxSetValue: function (browser) {
        browser.url(elements.url)
        browser.waitForElementVisible(elements.alertBoxInput)
        browser.setValue(elements.alertBoxInput, "Asad")
        browser.click(elements.alertButton).pause(2000)
        .acceptAlert().saveScreenshot('tests_output/Screenshots/Alert/alert.png')

        browser.click(elements.confirmButton).pause(2000)
        .dismissAlert();

    if(browser.isVisible(elements.textBoxVisible))
    {
        browser.
        pause(3000).
        setValue(elements.textBoxVisible,"Asad")
        .click("#hide-textbox").pause(2000);
        browser.
        waitForElementNotVisible(elements.textBoxVisible, 1000, 'elemento %s no era visible en %d ms');
        
    }        
    }
}

module.exports = {
    commands: [customerCommands]
}

