class Cart{
    element={
        cartBadgeIcon: '.shopping_cart_badge',
        cartRemoveButton:'#remove-sauce-labs-backpack',
        cartContinueShoppingButton:'#continue-shopping',
    }

    clickCartIcon(){
        cy.get(this.element.cartBadgeIcon).should('be.visible').click()
    }

    clickCartRemoveButton(){
        cy.get(this.element.cartRemoveButton).should('be.visible').click()
        cy.get(this.element.cartRemoveButton).should('not.exist')
    }

    clickCartContinueButton(){
        cy.get(this.element.cartContinueShoppingButton).should('be.visible').click()

    }

}
export default Cart