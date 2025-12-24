
import Login from "../pages/login"
import Logout from "../pages/logout";
import Utils from "../support/utils/utils";

const loginData= new Login()
const logoutData= new Logout()
const utility =new Utils()

beforeEach(() => {
  cy.login()
})

describe('responsive', () => {
  it('TC-RES-001: To verify website is reponsive', () => {
    cy.viewport('iphone-6')
    cy.contains('Swag Labs').should('be.visible')
    cy.get('#react-burger-menu-btn').should('be.visible')
    cy.get('.inventory_list').should('be.visible')
  })
})
