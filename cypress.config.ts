const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://html-project-gustavo-lohan.vercel.app/#",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
