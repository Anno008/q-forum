import { screen, waitFor } from "@testing-library/react";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import locators from "~/testUtils/locators";
import { renderWithContext } from "~/testUtils/renderWithContext";
import UserFilter from "../UserFilter";
import userEvent from "@testing-library/user-event";
import flushPromises from "flush-promises";

const mockFetchUsers = jest.fn(() => Promise.resolve(usersFixture));

jest.mock("../../../api/services/userService", () => ({
  fetchUsers: () => mockFetchUsers()
}));

describe("UserFilter component tests", () => {
  it("should trigger change on user selection", async () => {
    // Arrange
    mockFetchUsers.mockImplementation(() => Promise.resolve(usersFixture));
    const onUserFilterChangeSpy = jest.fn();

    // Act
    renderWithContext(<UserFilter onUserFilterChange={onUserFilterChangeSpy} />);

    const select = await screen.findByTestId(locators.userFilterSelect);
    await flushPromises();

    userEvent.selectOptions(select, usersFixture[0].username);

    // Assert
    await waitFor(() => {
      expect(onUserFilterChangeSpy).toHaveBeenCalledWith(usersFixture[0].id);
    });
  });

  it("Should show error message if fetching users fails", async () => {
    // Arrange
    const error = "An error happened";
    mockFetchUsers.mockImplementation(() => Promise.reject(new Error(error)));
    const onUserFilterChangeSpy = jest.fn();

    // Act
    renderWithContext(<UserFilter onUserFilterChange={onUserFilterChangeSpy} />);

    const errorMsg = await screen.findByText(error);
    expect(errorMsg).toBeInTheDocument();
  });

  it("Should show generic error message if fetching users fails", async () => {
    // Arrange
    mockFetchUsers.mockImplementation(() => Promise.reject(new Error()));
    const onUserFilterChangeSpy = jest.fn();

    // Act
    renderWithContext(<UserFilter onUserFilterChange={onUserFilterChangeSpy} />);

    const errorMsg = await screen.findByText("Failed to load users");
    expect(errorMsg).toBeInTheDocument();
  });
});
