export default class Filter{

    filterByPriceLowToHigh(){
        cy.get('.product_sort_container').select('lohi')
    }

    filterByPriceHighToLow(){
        cy.get('.product_sort_container').select('hilo')
    }

    filterByNameAtoZ(){
        cy.get('.product_sort_container').select('az')
    }

    filterByNameZtoA(){
        cy.get('.product_sort_container').select('za')
    }
}