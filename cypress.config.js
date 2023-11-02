const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  failOnStatusCode: false,
  chromeWebSecurity: false,
  env:{
    baseUrl: 'https://checkphish.ai',
    userName: 'shubhamladey7@gmail.com',
    password: 'Shubham@123'
  }
});
