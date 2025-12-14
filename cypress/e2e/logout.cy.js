import Login from "../pages/login"
import Logout from "../pages/logout";
import Utils from "../support/utils/utils";

const loginData= new Login()
const logoutData= new Logout()
const utility =new Utils()

beforeEach(() => {
  cy.login()
})

describe('Logout', () => {
  it('TC-LOGOUT-001: To verify user can logout', () => {
    logoutData.logout()
    utility.assertUrl('https://www.saucedemo.com/')

  })
})
