import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import locators from "~/testUtils/locators";

describe("Post page e2e tests", () => {
  beforeEach(() => {
    cy.visit("/posts");
  });

  it("Should display post page", () => {
    const postPage = cy.findByTestId(locators.postPageContainer);
    const postPageTitle = cy.findByText("Posts page");

    postPage.should("exist");
    postPageTitle.should("exist");
  });

  it("Should redirect to post details page on click", async () => {
    const post = cy.findByTestId(`${locators.postPageItem}-${postsFixture[1].id}`);

    post.click();

    const postDetailsPage = cy.findByTestId(locators.postPageDetailsContainer);

    postDetailsPage.should("exist");
  });
});
