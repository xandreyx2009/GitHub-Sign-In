// An example configuration file.
exports.config = {
	// The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
    'browserName': 'chrome'
  },

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/*_spec.js'],

    // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
	  showColors: true,
    defaultTimeoutInterval: 50000
  }
};
