class AddToCart {
    element = {
        allAddRemoveButtons: 'button.btn_inventory',
        cartBadgeIcon: '.shopping_cart_badge',
        addToCartButton:'#add-to-cart-sauce-labs-backpack'
    }

    clickAddToCartButton() {
        cy.get(this.element.addToCartButton).should('be.visible').click();
    }

    updateCart() {
        const btnSelector = this.element.allAddRemoveButtons;
        const badgeSelector = this.element.cartBadgeIcon;

        // Add all products and check count increases dynamically
        cy.get(btnSelector)
            .each(($btn, index) => {
                cy.wrap($btn)
                    .should("contain.text", "Add to cart")
                    .click();

                const expectedCount = (index + 1).toString();

                cy.get(badgeSelector)
                    .should("have.text", expectedCount);
            })
            .then(($buttons) => {

                const totalItems = $buttons.length;

                // Remove all products and check count decreases dynamically
                cy.get(btnSelector).each(($btn, index) => {
                    cy.wrap($btn)
                        .should("contain.text", "Remove")
                        .click();

                    const remaining = totalItems - (index + 1);

                    if (remaining > 0) {
                        cy.get(badgeSelector)
                            .should("have.text", remaining.toString());
                    } else {
                        cy.get(badgeSelector)
                            .should("not.exist");   // cart is empty
                    }
                });
            });

        return this;
    }
}

export default AddToCart;
