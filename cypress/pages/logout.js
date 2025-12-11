class Logout{
    element={
        hamburger:'#react-burger-menu-btn',
        logoutOption:'Logout'
    }
    clickHamburger(){
        cy.get(this.element.hamburger).should('be.visible').click()
    }

    clickLogoutOption(){
        cy.contains(this.element.logoutOption).should('be.visible').click()
    }

    logout(){

        this.clickHamburger()
        this.clickLogoutOption()
    }

}
export default Logout