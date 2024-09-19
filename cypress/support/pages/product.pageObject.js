import PageObject from '../PageObject';

class productPageObject extends PageObject {
  url = '/index.html';

  get addToCartBtn() {
    return cy.get('.cart');
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }
}

export default productPageObject;
