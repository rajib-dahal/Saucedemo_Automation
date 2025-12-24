describe("Bulk create departments", () => {

  beforeEach(() => {
    cy.visit("https://demo.admin.palikaportal.com/");
    cy.contains('IT, सिफारिस, दर्ता, असक्षमता, प्रोफाइलिङ, अन्य').click();
    cy.get("#field-\\:r0\\:").click().type("global@gmail.com");
    cy.get("#field-\\:r1\\:").click().type('Global@1234')
    cy.contains('button','लग इन').click();
    cy.get('a[href="/admin-dashboard/department"]').click({force: true})
 
    

  });

  it("creates all departments from fixture", () => {
    cy.fixture("department").then((departments) => {

      departments.forEach((dept) => {

        // Open modal
        cy.contains("शाखा थप्नुहोस्").click();

        // Fill form
        cy.get('input[name="name.en"]').clear().type(dept.name.en);
        cy.contains("शाखाको नाम (नेपाली)")
          .parent()
          .find("input")
          .clear()
          .type(dept.name.np);

        cy.get('input[name="code"]').clear().type(dept.code);

        // Select services
        dept.services.forEach(service => {
          cy.get(`input[type="checkbox"][value="${service}"]`)
            .check({ force: true });
        });

        // Submit
        cy.contains('button',"पेश गर्नुहोस्").click();

       

      });

    });
  });
});