class Utils {

    // Wait for URL to contain text
    waitForUrlContains(text) {
        cy.url().should('include', text)
    }

    //check url after login
    assertUrl(text){
        cy.url().should('equal',text)
    }

    // Assert text is visible anywhere
    assertTextVisible(text) {
        cy.contains(text).should('be.visible')
    }

    // Assert element contains specific text
    assertElementText(selector, expectedText) {
        cy.get(selector).should('contain.text', expectedText)
    }

    // Assert element is visible
    assertVisible(selector) {
        cy.get(selector).should('be.visible')
    }

    // Assert element is not visible
    assertNotVisible(selector) {
        cy.get(selector).should('not.be.visible')
    }

    // Assert exact value inside input field
    assertInputValue(selector, value) {
        cy.get(selector).should('have.value', value)
    }

    // Assert error message
    assertErrorMessage(selector, expectedMessage) {
        cy.get(selector)
          .should('be.visible')
          .and('contain.text', expectedMessage)
    }

    // Click element with force if needed
    safeClick(selector) {
        cy.get(selector).click({ force: true })
    }

    // Type with clearing old text
    safeType(selector, text) {
        cy.get(selector).clear().type(text)
    }

    // Confirm toast/snackbar messages
    assertToastMessage(text) {
        cy.contains(text, { timeout: 8000 }).should('be.visible')
    }

    // Wait for loader to disappear
    waitForLoader(selector = '.loading-spinner') {
        cy.get(selector, { timeout: 10000 }).should('not.exist')
    }

    // Select dropdown by text
    selectDropdown(selector, text) {
        cy.get(selector).select(text)
    }

    // Validate API response (reusable for all APIs)
    assertApiStatus(apiAlias, statusCode = 200) {
        cy.wait(apiAlias).its('response.statusCode').should('eq', statusCode)
    }

    // Random string generator
    randomString(length = 6) {
        return Math.random().toString(36).substring(2, 2 + length)
    }

}

export default Utils
