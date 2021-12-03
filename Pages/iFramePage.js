const elements = {
    url : "https://rahulshettyacademy.com/AutomationPractice/",
    iFrame : '#courses-iframe',
    iFrame_name : 'courses-iframe',
    loginBtn : ".register-btn",
    hoverButton : "#mousehover",
    
}

const iFrameFunc ={
    AceesIframe: function(browser){
        browser.
        url(elements.url);
        browser.moveToElement(elements.iFrame , 0, 0)
        browser.frame(elements.iFrame_name)
        .saveScreenshot('tests_output/Screenshots/iFrame/Frame.png')
        browser.click(elements.loginBtn)
        .pause(3000)
        .end()
    }
}

const hover = {
    hoverButtonClick : function(browser){
        browser.
        url(elements.url);
        browser.moveToElement(elements.hoverButton , 100, 100)
        .click(elements.hoverButton)
        .saveScreenshot('tests_output/Screenshots/iFrame/hover.png')
        .pause(2000)
        .end();

    }
}
module.exports = {
    commands : [iFrameFunc, hover]
}