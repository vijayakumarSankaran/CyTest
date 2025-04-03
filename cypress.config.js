const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:3000',  // Set your app's base URL here
    // supportFile: 'cypress/support/e2e.js',  // Path to the support file
    specPattern: 'cypress/integration/**/*.js',  // Path to your test files
  },
  "env":{
    "username":"Lavu.cherry@gmail.com",
    "password":"Test!1234"
  }
  
});
