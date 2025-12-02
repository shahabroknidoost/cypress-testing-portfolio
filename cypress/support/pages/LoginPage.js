// cypress/support/pages/LoginPage.js

class LoginPage {
  // Selectors - where to find elements
  elements = {
    usernameInput: () => cy.get('#userName'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login'),
  };

  // Actions - what to do
  visit() {
    cy.visit('https://demoqa.com/login');
  }

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  // Combined action
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();