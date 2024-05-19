import { Builder, Browser, By, Key, until, error } from 'selenium-webdriver'
import { assert, expect } from 'chai'


describe("Login test", function() {

    it("Test the login page", function(done) {

        let driver = new Builder().forBrowser(Browser.CHROME).build();

        // Navigate to the login page
        driver.get('https://seunbankapp.azurewebsites.net/');

        // Maximize browser window
        driver.manage().window().maximize();

        // Locate and insert text into email field
        var email_input = driver.findElement(By.id('email'));
        email_input.sendKeys('itt@gmail.com', Key.RETURN);

        // Locate and insert text into email field
        var password_input = driver.findElement(By.id('password'));
        password_input.sendKeys('password', Key.RETURN);

    
        // Locate button by its text "Sign In"
        var sign_in = driver.findElement(By.xpath('//button[text()="Sign In"]'));
        sign_in.click();
    
        // //Assert that the heading "CHASE-BANK is present"
        // var home_page_heading = driver.findElement(By.xpath('//span[text()="292676"]'));
        // expect(home_page_heading.isDisplayed).to.equal("292676");

        //Wait some time to observe result
        this.timeout(3000);

        done();

    }).timeout(10000);


});