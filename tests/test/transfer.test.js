import { Builder, Browser, By, Key, until, error } from 'selenium-webdriver'
import { assert, expect } from 'chai'


describe("Transfer test", function() {


    it("Test a transfer transaction", async function(done) {

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

        //Wait some time to observe result
        this.timeout(5000);

        // Locate button by its text "Sign In"
        var make_transfer = driver.findElement(By.xpath('//button[text()="Transfer"]'));
        make_transfer.click();    

        // Locate and insert acc num into acc num field
        var acc_num = driver.findElement(By.id('addnum'));
        acc_num.sendKeys('292676', Key.RETURN);

        // Locate and insert acc name into acc name field
        var acc_num = driver.findElement(By.id('addname'));
        acc_num.sendKeys('Jsus', Key.RETURN);

        // Locate and insert amt into amt field
        var acc_num = driver.findElement(By.id('addamt'));
        acc_num.sendKeys('100', Key.RETURN);

        // Locate and insert pin into pin field
        var acc_num = driver.findElement(By.id('addpin'));
        acc_num.sendKeys('1234', Key.RETURN);

        // Locate button by its text "Sign In"
        var transfer_btn = driver.findElement(By.id("transfer_btn"));
        transfer_btn.click(); 

        // //Assert that the heading "CHASE-BANK is present"
        // var transfer_msg = driver.findElement(By.xpath('//h4[text()="Jsus"]'));
        // expect(transfer_msg).to.equal('Jsus')

        //Wait some time to observe result
        this.timeout(5000);

        done();

    }).timeout(10000)


});