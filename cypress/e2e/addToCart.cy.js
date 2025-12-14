import Login from "../pages/login"
import Utils from "../support/utils/utils"
import AddToCart from "../pages/addToCart"

const loginData= new Login()
const utility =new Utils()
const addToCartData=new AddToCart()
beforeEach(() => {
  cy.login()
})

describe('ADD_TO_CART', () => {
  it('TC-ADDTOCART-001: To verify add to cart button is working', () => {

    addToCartData.clickAddToCartButton();
    utility.assertElementText('#remove-sauce-labs-backpack', 'Remove');
});

  it('TC-ADDTOCART-001: To verify cart icon is updated after item is added to cart', () => {
    addToCartData.updateCart()
  })

  it('TC-ADDTOCART-001: To verify user can add product from product page', () => {
    addToCartData.addToCartProductPage()
  })



})