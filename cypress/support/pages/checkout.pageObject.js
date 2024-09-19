import PageObject from '../PageObject';

class checkoutPageObject extends PageObject {
  url = '/index.html';

  get checkoutBtn() {
    return cy.get('#cart_checkout1');
  }

  clickOnCheckoutBtn() {
    this.checkoutBtn.click();
  }
  get confirmOrderBtn() {
    return cy.get('#checkout_btn');
  }
  clickOnConfirOrderBtn() {
    this.confirmOrderBtn.click();
  }
  get confirmationMessage() {
    return cy.get('.maintext');
  }
}

export default checkoutPageObject;
