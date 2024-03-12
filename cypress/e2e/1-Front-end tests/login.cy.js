import testData from "../../fixtures/testData.json";

describe("Login process", () => {
  context("Front-end tests", () => {
    beforeEach(() => {
      cy.visit("en/signin");
      cy.waitPageToLoad();
    });

    it("Successfull Login", () => {
      cy.login(Cypress.env("validEmail"), Cypress.env("validPassword"));
      cy.location("pathname").should("equal", "/en/offerings");
      cy.verifyUserProfileName(
        Cypress.env("validFirstName"),
        Cypress.env("validLastName")
      );
    });
  });
});
