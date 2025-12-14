import Utils from "../support/utils/utils"
const utility =new Utils()

class AddToCart {
    element = {
        allAddRemoveButtons: 'button.btn_inventory',
        cartBadgeIcon: '.shopping_cart_badge',
        addToCartButton:'#add-to-cart-sauce-labs-backpack',
        productId:'#item_4_title_link',
        productPageUrl:'https://www.saucedemo.com/inventory-item.html?id=4',
        productPageAddToCartButton:'#add-to-cart',
        pageCartIcon:'.shopping_cart_link .shopping_cart_badge'
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

    addToCartProductPage(){
        cy.get(this.element.productId).should('be.visible').click()
        utility.assertUrl(this.element.productPageUrl)
        cy.get(this.element.productPageAddToCartButton).should('be.visible').click()
        cy.get(this.element.pageCartIcon).should('be.visible').and('contain.text',1)
    }
}

export default AddToCart;
