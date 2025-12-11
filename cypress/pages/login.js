class Login{
    element={
        loginUsernameInput:'#user-name',
        loginPasswordInput:'#password',
        loginButton:'Login'
    }

    visit(){
        cy.visit('/')
    }

    typeLoginUsername(){
        cy.get(this.element.loginUsernameInput).clear().type(Cypress.env('username')).should('have.value',Cypress.env('username'))
    }

    typeLoginPassword(){
       cy.get(this.element.loginPasswordInput).clear().type(Cypress.env('password')).should('have.value',Cypress.env('password'))
    }

    clickLoginButton(){
        cy.contains(this.element.loginButton).click()
    }

    login(){
        this.visit()
        this.typeLoginUsername()
        this.typeLoginPassword()
        this.clickLoginButton()
    }

    
}

export default Login

