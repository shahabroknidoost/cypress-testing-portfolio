// cypress/e2e/api/users.cy.js

describe('Users API with Custom Commands', () => {

  it('should get all users', () => {
    cy.logStep('Fetching all users');
    
    cy.apiRequest('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(10);
    });
  });

  it('should get single user', () => {
    cy.logStep('Fetching user with ID 1');
    
    cy.apiRequest('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Leanne Graham');
      expect(response.body.email).to.exist;
    });
  });

  it('should create new user', () => {
    cy.logStep('Creating new user');
    
    cy.apiRequest('POST', '/users', {
      name: 'Shahab Test',
      email: 'shahab@test.com',
      username: 'shahabtest',
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Shahab Test');
    });
  });

  it('should return 404 for non-existent user', () => {
    cy.logStep('Fetching non-existent user');
    
    cy.apiRequest('GET', '/users/9999').then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});