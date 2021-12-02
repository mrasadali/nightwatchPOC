describe("Elements testing", function(){
test("Should click and handle alerts", function(browser){
    const url = "https://rahulshettyacademy.com/AutomationPractice/"
    const alertBoxInput = "#name"
    const alertButton = "#alertbtn"
    const confirmButton = "#confirmbtn"
    const textBoxVisible = "#displayed-text"

    browser.
    url(url)
    .setValue(alertBoxInput, "Asad")
    .click(alertButton)
    .acceptAlert()
    .pause(2000)
    .saveScreenshot('tests_output/Screenshots/Alert/alert.png')

    .click(confirmButton)
    .pause(2000)
    .dismissAlert();

    if(browser.isVisible(textBoxVisible))
    {
        browser.
        pause(3000).
        setValue(textBoxVisible,"Asad")
        .click("#hide-textbox").pause(2000);
        browser.
        waitForElementNotVisible(textBoxVisible, 1000, 'elemento %s no era visible en %d ms');
        
    }

})
})