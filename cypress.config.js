const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/dev-jobs-app",
    "specPattern": "./cypress/e2e/**/*.e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
