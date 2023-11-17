describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.wait(4000); //w8 localhost load

    cy.get("video").should("exist");
    cy.get("video").should("not.have.prop", "paused", true);

    cy.wait(500);

    cy.get("#clicktopause").click();

    cy.get("video").should("exist");

    cy.get("video").should("have.prop", "paused", true);
    cy.visit("http://localhost:3000/hospital");
    cy.wait(4000); //w8 localhost load
    cy.get('[data-testid="testdata"]').should("have.length.at.least", 3);
  });
});
