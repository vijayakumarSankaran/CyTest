import loginPage from '../../pages/loginPage';
import LoginPage from '../../pages/loginPage';

describe('Login Tests', () => {
  it('should log in with valid credentials', () => {
    LoginPage.visit();
    cy.viewport(2560, 1600)
    loginPage.login('abc43@gmail.com','Test@123')
    cy.wait(2000)
    
  });

 
});
