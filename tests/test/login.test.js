import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import { assert, expect } from 'chai'


describe("Login test", function() {

    this.timeout(0);

    it("Test the login page", async function(done) {

        let driver = await new Builder().forBrowser(Browser.CHROME).build();

        // Navigate to the login page
        await driver.get('https://seunbankapp.azurewebsites.net/');

        // Locate and insert text into email field
        var email_input = await driver.findElement(By.id('email'));
        email_input.sendKeys('itt@gmail.com', Key.RETURN);

        // Locate and insert text into email field
        var password_input = await driver.findElement(By.id('password'));
        password_input.sendKeys('password', Key.RETURN);

        //Wait some time to observe result
        this.timeout(5000);

        // Locate button by its text "Sign In"
        var sign_in = await driver.findElement(By.xpath('//button[text()="Sign In"]'));
        sign_in.click();
    
        //Assert that the heading "CHASE-BANK is present"
        var home_page_heading = await driver.findElement(By.xpath('//h4[text()="CHASE-BANK"]'));
        expect(home_page_heading).to.equal('CHASE-BANK');


        done();
    });


});