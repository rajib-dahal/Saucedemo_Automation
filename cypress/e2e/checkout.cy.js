import Login from "../pages/login"
import Utils from "../support/utils/utils"
import AddToCart from "../pages/addToCart"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import "allure-cypress";


const loginData= new Login()
const utility =new Utils()
const cartData=new Cart()
const addToCartData=new AddToCart()
const checkout=new Checkout()

beforeEach(() => {
  cy.login()
})

describe('CHECKOUT', () => {

  it('TC-CHECKOUT-001: To verify checkout button is working', () => {
     checkout.clickCheckoutButton()
     utility.assertUrl('https://www.saucedemo.com/checkout-step-one.html')
    })

    it('TC-CHECKOUT-002: To verify user can checkout with vlaid information', () => {
        checkout.clickCheckoutButton()
        checkout.checkoutForm()

    })

})