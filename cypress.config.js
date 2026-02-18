const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",  
  allowCypressEnv: false,
  projectId: "rdysc9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
