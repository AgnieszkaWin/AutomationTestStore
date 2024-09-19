import PageObject from '../PageObject';

class homePageObject extends PageObject {
  url = 'index.php?rt=account/login';

  get usernameField() {
    return cy.get('#loginFrm_loginname');
  }
  get passwordField() {
    return cy.get('#loginFrm_password');
  }
  get search() {
    return cy.get('#filter_keyword');
  }

  get category() {
    return cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=43"]'
    );
  }

  get loginBtn() {
    return cy.contains('.btn', 'Login');
  }

  clickLogin() {
    this.loginBtn.click();
  }
}

export default homePageObject;
