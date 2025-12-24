export default class TableUtils {

    chechTableVisible(tableSelector) {
        cy.get(tableSelector).should('be.visible')
    }

    assertTableHeaders(headerSelector, expectedHeaders) {
    cy.get(headerSelector)
        .should('have.length', expectedHeaders.length)
        .each(($el, index) => {
            cy.wrap($el)
                .scrollIntoView({ block: 'center', inline: 'center' }) 
                .should('be.visible')
                .invoke('text')
                .then(actualText => {
                    expect(actualText.trim()).to.contain(expectedHeaders[index])
                })
        })
    }

assertTableValues(tableSelector, expectedTableData) {
    const numCols = expectedTableData[0].length; // excludes Action column

    cy.get(`${tableSelector} tbody tr`).each(($row, rowIndex) => {
        cy.wrap($row).find('td').each(($cell, colIndex) => {

            // Skip last column (Action column)
            if (colIndex >= numCols) return

            cy.wrap($cell)
                .scrollIntoView({ block: 'center', inline: 'center' })
                .should('be.visible')
                .invoke('text')
                .then(text => {
                    const expected = expectedTableData[rowIndex][colIndex]
                    expect(text.trim()).to.eq(expected)
                })
        })
    })
}





    assertTableActions({ tableSelector, columnSelector, buttonText = [], buttonSelector = [] }) {
    // Wait for rows
    cy.get(`${tableSelector} tbody tr`).should('exist')
        .each(($row) => {
            cy.wrap($row).find(columnSelector)
                .scrollIntoView({ block: 'center', inline: 'center' })
                .within(() => {

                    // Assert buttons by text
                    buttonText.forEach((text) => {
                        cy.contains('a, button', text).should('be.visible')
                    })

                    // Assert buttons by selector
                    buttonSelector.forEach((selector) => {
                        cy.get(selector).should('be.visible')
                    })
                })
        })
}

assertFullTable({
    tableSelector,
    expectedHeaders = [],      // array of header texts
    expectedData = [],         // 2D array of row values (exclude action column)
    actionColumnSelector,      // e.g., 'td.action'
    actionButtonText = [],     // e.g., ['Edit', 'Delete']
    actionButtonSelector = []  // optional: e.g., ['.btn-primary', '.btn-danger']
}) {
    // --- Assert headers ---
    if (expectedHeaders.length) {
        cy.get(`${tableSelector} thead th`)
            .should('have.length', expectedHeaders.length)
            .each(($th, index) => {
                cy.wrap($th)
                    .scrollIntoView()
                    .invoke('text')
                    .then(text => {
                        expect(text.trim()).to.eq(expectedHeaders[index])
                    })
            })
    }

    // --- Assert row values ---
    if (expectedData.length) {
        const numCols = expectedData[0].length; // excludes Action column

        cy.get(`${tableSelector} tbody tr`)
            .should('have.length', expectedData.length)
            .each(($row, rowIndex) => {

                cy.wrap($row).find('td').each(($cell, colIndex) => {
                    // Skip Action column
                    if (colIndex >= numCols) return

                    cy.wrap($cell)
                        .scrollIntoView({ block: 'center', inline: 'center' })
                        .should('be.visible')
                        .invoke('text')
                        .then(text => {
                            expect(text.trim()).to.eq(expectedData[rowIndex][colIndex])
                        })
                })

                // --- Assert action buttons ---
                if (actionColumnSelector) {
                    cy.wrap($row).find(actionColumnSelector)
                        .scrollIntoView({ block: 'center', inline: 'center' })
                        .within(() => {
                            actionButtonText.forEach(name => {
                                cy.contains('a, button', name).should('be.visible')
                            })
                            actionButtonSelector.forEach(sel => {
                                cy.get(sel).should('be.visible')
                            })
                        })
                }
            })
    }
}




    
}       


