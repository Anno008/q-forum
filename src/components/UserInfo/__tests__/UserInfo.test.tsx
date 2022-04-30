/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, waitFor } from "@testing-library/react";
import { commentsFixture } from "~/testUtils/fixtures/commentsFixture";
import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import { userFixture } from "~/testUtils/fixtures/userFixture";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";
import UserInfo from "../UserInfo";

const mockFetchUser = jest.fn(_userId => Promise.resolve(userFixture));

jest.mock("../../../api/services/userService", () => ({
  fetchUser: (userId: number) => mockFetchUser(userId)
}));

describe("UserInfo component tests", () => {
  it("Should display username", async () => {
    // Arrange
    const userId = 1;

    // Act
    renderWithContext(<UserInfo userId={userId} />);

    // Assert
    const title = await screen.findByText(userFixture.username);
    expect(title).toBeInTheDocument();
  });

  it("Should show error message if fetching user fails", async () => {
    // Arrange
    const error = "An error happened";
    mockFetchUser.mockImplementation(_ => Promise.reject(new Error(error)));
    const userId = 1;

    // Act
    renderWithContext(<UserInfo userId={userId} />);

    const errorMsg = await screen.findByText(error);
    expect(errorMsg).toBeInTheDocument();
  });

  it("Should show generic error message if fetching user fails", async () => {
    // Arrange
    mockFetchUser.mockImplementation(_ => Promise.reject(new Error()));
    const userId = 1;

    // Act
    renderWithContext(<UserInfo userId={userId} />);

    const errorMsg = await screen.findByText("Failed to load user data");
    expect(errorMsg).toBeInTheDocument();
  });
});
