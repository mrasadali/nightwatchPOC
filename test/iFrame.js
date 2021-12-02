describe("iFrame Testing", function(){

    const url = "https://rahulshettyacademy.com/AutomationPractice/"

    test("Should click on login in iFrame", function(browser){
        
        browser.
        url(url);
        browser.moveToElement( '#courses-iframe', 0, 0)
        browser.frame('courses-iframe')
        browser.click('.register-btn')
        .pause(3000)
        .end()
    })

    test("Should hover to the button and click", function(browser){
        
        browser.
        url(url);
        browser.moveToElement( '#mousehover', 100, 100)
        .click('#mousehover')
        .pause(2000)
        .end();

    })
})