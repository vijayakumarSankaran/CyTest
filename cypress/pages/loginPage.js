class LoginPage {
  // Define the elements (selectors)
  get usernameField() {
    return cy.get('input[name="email"]');
  }

  get passwordField() {
    return cy.get('input[name="assword"]');
  }

  get loginButton() {
    return cy.get('input[type="submit"]');
  }

  // Define actions
  visit() {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login'); // URL to the login page
  }

  login(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  // checkErrorMessage(expectedMessage) {
  //   this.errorMessage.should('contain.text', expectedMessage);
  // }
}

export default new LoginPage();
