import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithContext } from "~/testUtils/renderWithContext";
import ScrollToTopButton from "../ScrollToTopButton";

describe("ScrollToTopButton component tests", () => {
  it("Should not show button if the offset is lower than 300", () => {
    const testId = "testing";
    renderWithContext(<ScrollToTopButton testId={testId} />);

    const scrollUpButton = screen.queryByTestId(testId);

    expect(scrollUpButton).not.toBeInTheDocument();
  });

  it("Should show button if the user scrolls", () => {
    const testId = "testing";
    renderWithContext(<ScrollToTopButton testId={testId} />);

    fireEvent.scroll(window, {
      target: {
        scrollY: 500
      }
    });

    const scrollUpButton = screen.queryByTestId(testId);

    expect(scrollUpButton).toBeInTheDocument();
  });

  it("Should show the button when scrolling down and scroll to top after clicking it", async () => {
    const testId = "testing";
    renderWithContext(<ScrollToTopButton testId={testId} />);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

    fireEvent.scroll(window, {
      target: {
        scrollY: 500
      }
    });

    const scrollUpButton = screen.getByTestId(testId);

    expect(scrollUpButton).toBeInTheDocument();

    fireEvent.click(scrollUpButton);
    await waitFor(() => {
      expect(spyScrollTo).toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
    });
    fireEvent.scroll(window, {
      target: {
        scrollY: 0
      }
    });
  });
});
