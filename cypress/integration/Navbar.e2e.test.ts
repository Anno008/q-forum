import locators from "~/testUtils/locators";

describe("Navbar e2e tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should display theme switch", () => {
    const themeSwitch = cy.findByTestId(locators.themeSwitchToggleButton);

    themeSwitch.should("exist");
  });
});
