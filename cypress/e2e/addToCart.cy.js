import Login from "../pages/login"
import Utils from "../support/utils/utils"
import AddToCart from "../pages/addToCart"

const loginData= new Login()
const utility =new Utils()
const cartData=new AddToCart()

describe('LOGIN', () => {
  it('TC-ADDTOCART-001: To verify add to cart button is working', () => {
    loginData.login();
    cartData.clickAddToCartButton();
    utility.assertElementText('#remove-sauce-labs-backpack', 'Remove');
});

  it('TC-ADDTOCART-001: To verify cart icon is updated after item is added to cart', () => {
    loginData.login()
    cartData.updateCart()
    

  })


})