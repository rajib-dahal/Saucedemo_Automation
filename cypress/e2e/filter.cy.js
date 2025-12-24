import Login from "../pages/login"
import Utils from "../support/utils/utils";
import Filter from "../pages/filter";

const loginData= new Login()
const utility =new Utils()
const filterData= new Filter()

beforeEach(() => {
  cy.login()
})

describe('FILTER', () => {
  it('TC-FILTER-001: To verify user can filter the products', () => {

    // Filter Low to High
    filterData.filterByPriceLowToHigh()
    
    // Verify Low to High
    cy.get('.inventory_item_price').then(($prices) => {
        const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices).to.deep.equal(sortedPrices)
    })

    // Filter High to Low
    filterData.filterByPriceHighToLow()

    // Verify High to Low
    cy.get('.inventory_item_price').then(($prices) => {
        const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices).to.deep.equal(sortedPrices)
    })

    // Filter Name A to Z
    filterData.filterByNameAtoZ()

    // Verify Name A to Z
    cy.get('.inventory_item_name').then(($names) => {
        const names = [...$names].map(el => el.innerText)
        const sortedNames = [...names].sort()
        expect(names).to.deep.equal(sortedNames)
    })

    // Filter Name Z to A
    filterData.filterByNameZtoA()

    // Verify Name Z to A
    cy.get('.inventory_item_name').then(($names) => {
        const names = [...$names].map(el => el.innerText)
        const sortedNames = [...names].sort().reverse()
        expect(names).to.deep.equal(sortedNames)
    })

  })
})
