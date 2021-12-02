module.exports = { 

    "Login test" : function(browser){

        browser.url("https://the-internet.herokuapp.com/login")
        .waitForElementVisible("#username")
        .setValue("#username", "tomsmith")
        .setValue("#password", "SuperSecretPassword!")
        .click(".fa-sign-in")
        .waitForElementVisible(".example")
        .assert.containsText(".example", " Secure Area")
        .click(".icon-signout")
        .end()


    }
}