var home_page = function() {
	
	this.userInput = function(value) {
		element(by.id('user[login]')).sendKeys(value);
	};
	this.emailInput = userInput =  function(value) {
		element(by.id('user[email]')).sendKeys(value);
	};
    this.passwordInput = userInput =  function(value) {
		element(by.id('user[password]')).sendKeys(value);
	};
    this.loginButton = function() {
		element(by.buttonText('Sign up for GitHub')).click();
	};
  
   
  };
  module.exports = new home_page();
	
	
	
