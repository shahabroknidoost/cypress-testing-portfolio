// Import commands.js
import './commands';

// Ignore uncaught exceptions from third-party scripts
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});