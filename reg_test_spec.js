

describe ("test github registration form", function() {
  beforeEach(function() {
	  browser.waitForAngularEnabled(false);
      browser.get("https://github.com");
     });
     
	 xit ("to test input user[login] field and check output", function() {
     
	 element(by.id("user[login]")).sendKeys("xandreyx8901");
     element(by.id("user[email]")).sendKeys("testqa@ukr.net");
     element(by.id("user[password]")).sendKeys("Q$aZ1@23WsX");
     element(by.buttonText('Sign up for GitHub')).click();
	 
	 browser.waitForAngularEnabled(true); 
	 }); 
	 
	 var home_page = require('../page/sign_up_page.js');
	 
	 it ('Input text to field' , function() {
	 home_page.userInput("horseQA");
	 home_page.emailInput("testqafirst@ukr.net");
     home_page.passwordInput("Q$aZ1tttt@23WsX");
     home_page = home_page.loginButton();
	 });
});
	 
