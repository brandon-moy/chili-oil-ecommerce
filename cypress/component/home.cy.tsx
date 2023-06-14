import Home from "@/app/page";

describe("Component testings for the home page", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(<Home />);
    });
  });

  it("Renders a hero image", () => {
    cy.get("[data-cy='home-hero']").should("be.visible");
  });
});
