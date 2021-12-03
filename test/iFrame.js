describe("iFrame Testing", function(){

    
    test("Should click on login in iFrame", function(browser){
        const iframeObj = browser.page.iFramePage()    
        iframeObj.AceesIframe(browser)
       
    })

    test("Should hover to the button and click", function(browser){
        const iframeObj1 = browser.page.iFramePage()
        iframeObj1.hoverButtonClick(browser)
    })
})