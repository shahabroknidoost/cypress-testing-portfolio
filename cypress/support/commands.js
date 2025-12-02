// cypress/support/commands.js

// Custom command for API login
Cypress.Commands.add('apiRequest', (method, endpoint, body = null) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  
  const options = {
    method: method,
    url: `${baseUrl}${endpoint}`,
    failOnStatusCode: false,
  };
  
  if (body) {
    options.body = body;
  }
  
  return cy.request(options);
});

// Custom command to log test steps
Cypress.Commands.add('logStep', (message) => {
  cy.log(`📍 STEP: ${message}`);
});