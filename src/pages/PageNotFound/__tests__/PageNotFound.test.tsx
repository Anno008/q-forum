import { screen } from "@testing-library/react";
import { renderWithContext } from "~/testUtils/renderWithContext";
import PageNotFound from "../PageNotFound";

describe("NotFound page tests", () => {
  it("Should display title", () => {
    renderWithContext(<PageNotFound />);

    const title = screen.getByText("Page not found");
    expect(title).toBeInTheDocument();
  });
});
