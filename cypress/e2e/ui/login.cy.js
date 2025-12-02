// cypress/e2e/ui/login.cy.js
import LoginPage from '../../support/pages/LoginPage';

describe('DemoQA Login Page', () => {
  
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should display login form', () => {
    // Check all elements are visible
    LoginPage.elements.usernameInput().should('be.visible');
    LoginPage.elements.passwordInput().should('be.visible');
    LoginPage.elements.loginButton().should('be.visible');
  });

  it('should show error for empty form submission', () => {
    // Click login without entering anything
    LoginPage.clickLogin();
    
    // Fields should show red border (validation error)
    LoginPage.elements.usernameInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('should show error for invalid credentials', () => {
    // Use POM combined action
    LoginPage.login('wronguser', 'wrongpassword');
    
    // Error message should appear
    cy.contains('Invalid username or password').should('be.visible');
  });
});