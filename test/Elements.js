describe("Elements testing", function(){
    
    test("Should include the checkboxes to click", function(browser){
        
        const obj = browser.page.elementsPage()
        obj.dropdowncheckboxes(browser)
    })
})