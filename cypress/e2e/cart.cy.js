import Login from "../pages/login"
import Utils from "../support/utils/utils"
import AddToCart from "../pages/addToCart"
import Cart from "../pages/cart"
import "allure-cypress";

const loginData= new Login()
const utility =new Utils()
const cartData=new Cart()
const addToCartData=new AddToCart()
beforeEach(() => {
  cy.login()
})

describe('CART', () => {

  it('TC-CART-001: To verify item is removed from cart after clicking cancel button', () => {
    addToCartData.clickAddToCartButton();
    utility.assertElementText('#remove-sauce-labs-backpack', 'Remove');
    cartData.clickCartIcon()
    utility.assertUrl('https://www.saucedemo.com/cart.html')
    cartData.clickCartRemoveButton()
  })

  it('TC-CART-001: To verify user is directed to home page after clicking continue shopping button', () => {
    addToCartData.clickAddToCartButton();
    utility.assertElementText('#remove-sauce-labs-backpack', 'Remove');
    cartData.clickCartIcon()
    utility.assertUrl('https://www.saucedemo.com/cart.html')
    cartData.clickCartContinueButton()
    utility.assertUrl('https://www.saucedemo.com/inventory.html')
  })


})