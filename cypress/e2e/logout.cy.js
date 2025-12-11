import Login from "../pages/login"
import Logout from "../pages/logout";
import Utils from "../support/utils/utils";

const loginData= new Login()
const logoutData= new Logout()
const utility =new Utils()

describe('Logout', () => {
  it('TC-LOGOUT-001: To verify user can logout', () => {
    loginData.login()
    logoutData.logout()
    utility.assertUrl('https://www.saucedemo.com/')

  })
})
