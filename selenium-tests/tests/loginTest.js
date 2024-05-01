const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function loginTests() {

  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  
  try {

    // Navigate to the website
    await driver.get('https://seunbankapp.azurewebsites.net/');

    // Locate and insert text into email field
    await driver.findElement(By.id('email')).sendKeys('itt@gmail.com');

    // Locate and insert text into email field
    await driver.findElement(By.id('password')).sendKeys('password');

    // Locate button by its text "Sign In"
    await driver.findElement(By.xpath('//button[text()="Sign In"]')).click();;
    
    //Wait some time to observe result
    await driver.sleep(3000);
    
    //Assert that the heading "CHASE-BANK is present"
    home_page_heading = await driver.findElement(By.xpath('//h4[text()="CHASE-BANK"]')).assert(home_page_heading.isDisplayed('Expected heading "CHASE-BANK" not found'));

  } finally {

    await driver.quit();
  
};

})();
