const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    baseUrl: 'https://checkphish.ai',
    userName: 'shubhamladey7@gmail.com',
    password: 'Shubham@123'
  }
});
