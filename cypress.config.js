const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thelab.boozang.com',
    specPattern: [
      'cypress/e2e/2-advanced-examples/speed-game.cy.js',
      'cypress/e2e/2-advanced-examples/wait-game.cy.js',
      'cypress/e2e/2-advanced-examples/yellow-or-blue.cy.js',
      'cypress/e2e/2-advanced-examples/sorted-list.cy.js',
      'cypress/e2e/2-advanced-examples/form-fill.cy.js',
      'cypress/e2e/2-advanced-examples/cat-shelter.cy.js',
      'cypress/e2e/2-advanced-examples/concatenate-strings.cy.js'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
