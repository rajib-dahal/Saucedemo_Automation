import Login from "../pages/login"
import Utils from "../support/utils/utils"
import "allure-cypress";

const loginData= new Login()
const utility =new Utils()

describe('LOGIN', () => {
  it('TC-LOGIN-001: To verify user can login with valid credentials', () => {
    loginData.login()
  })

  it('TC-LOGIN-002: To verify user can login with only username', () => {
    loginData.visit()
    loginData.typeLoginUsername()
    loginData.clickLoginButton()
    utility.assertErrorMessage('[data-test="error"]','Epic sadface: Password is required')
  })

  it('TC-LOGIN-003: To verify user can login with only password', () => {
    loginData.visit()
    loginData.typeLoginPassword()
    loginData.clickLoginButton()
    utility.assertErrorMessage('[data-test="error"]','Epic sadface: Username is required')

  })

   it('TC-LOGIN-004: To verify user can login with empty fields', () => {
    loginData.visit()
    loginData.clickLoginButton()
    utility.assertErrorMessage('[data-test="error"]','Epic sadface: Username is required')

  })

})