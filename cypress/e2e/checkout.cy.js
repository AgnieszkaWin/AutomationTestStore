const { faker } = require('@faker-js/faker');
/// <reference types='cypress' />
import checkoutPageObject from '../support/pages/checkout.pageObject';
import homePageObject from '../support/pages/home.pageObject';
import productPageObject from '../support/pages/product.pageObject';
const checkout = new checkoutPageObject();
const home = new homePageObject();
const product = new productPageObject();

const testData = {
  email: 'ligedim@mailinator.com',
  userName: 'IamVerySmart',
  password: 'Smart123',
  successMessage: 'Your Order Has Been Processed!',
  product: 'Benefit Bella Bamba'
};

const currentDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
};
const date = currentDate();

describe('Checkout', () => {
  before(() => {
    cy.visit('/index.php?rt=account/login');
  });
  it('should provide the ability to buy product', () => {
    home.usernameField.type(testData.userName);
    home.passwordField.type(testData.password);
    home.clickLogin();
    home.search.type(`${testData.product}{enter}`);
    product.clickOnaddToCartBtn();
    checkout.clickOnCheckoutBtn();
    checkout.clickOnConfirOrderBtn();
    checkout.confirmationMessage.should('contain', testData.successMessage);
  });
});
