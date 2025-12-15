
class Checkout{
    element={
         cartBadgeIcon: '#shopping_cart_container',
        checkoutButton:'#checkout',
        checkoutName:'#first-name',
        checkoutLastName:'#last-name',
        checkoutPostalCode:'#postal-code',
        checkoutContinueButton:'#continue',
        checkoutFinishButton:'#finish',


    }

    clickCheckoutButton(){
        cy.get(this.element.cartBadgeIcon).should('be.visible').click()
        cy.get(this.element.checkoutButton).should('be.visible').click()
        
    }

    checkoutForm(){
        cy.get(this.element.checkoutName).should('be.visible').type('John')
        cy.get(this.element.checkoutLastName).should('be.visible').type('Doe')
        cy.get(this.element.checkoutPostalCode).should('be.visible').type('12345')
        cy.get(this.element.checkoutContinueButton).should('be.visible').click()
        cy.get(this.element.checkoutFinishButton).should('be.visible').click()
    }
    

}
export default Checkout