// cypress/pages/loginPage.js
class RegisterPage {
    // Selectors for the login page elements
    get myAccountField() {
      return cy.xpath('//a[@title="My Account"]');
    }
  
    get registerField() {
      return cy.xpath('(//a[text()="Register"])[1]');
    }
    
    get fistNameField() {
        return cy.xpath('//input[@name="firstname"]');
      }
    // Methods to interact with the page
    clickMyAccountLink() {
      this.myAccountField.click();
    }
  
    clickRegisterLink() {
      this.registerField.click();
    }
    
    enterFirstName(firtName) {
        this.fistNameField.type(firtName);
      }

    fillForm(firtName){
        this.enterFirstName(firtName)
    }

  }
  
  export default new RegisterPage();
  