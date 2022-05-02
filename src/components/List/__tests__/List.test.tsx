import { fireEvent, screen } from "@testing-library/react";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";
import List from "../List";
import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import { Post } from "~/models/Post";
import { LIMIT } from "~/constants/config";

const mockFetchUsers = jest.fn(() => Promise.resolve(usersFixture));

jest.mock("../../../api/services/userService", () => ({
  fetchUsers: () => mockFetchUsers()
}));

describe("List component tests", () => {
  it("should show items", async () => {
    // Arrange
    const fetchFn = jest.fn().mockResolvedValue(postsFixture);

    // Act
    renderWithContext(
      <List<Post>
        fetchItemsFn={fetchFn}
        arg={1}
        renderItem={item => <div key={item.id}>{item.id}</div>}
      />
    );

    const item = await screen.findByText(postsFixture[0].id);

    // Assert
    expect(item).toBeInTheDocument();
  });

  it("should fetch more items on button click", async () => {
    // Arrange
    const fetchFn = jest.fn(() => Promise.resolve(postsFixture));

    // Act
    renderWithContext(
      <List<Post>
        fetchItemsFn={fetchFn}
        arg={1}
        renderItem={item => <div key={item.id}>{item.id}</div>}
      />
    );

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(fetchFn).toHaveBeenNthCalledWith(1, 0, LIMIT, 1);
    expect(fetchFn).toHaveBeenNthCalledWith(2, 10, LIMIT, 1);

    const item = await screen.findByText(postsFixture[0].id);

    expect(item).toBeInTheDocument();
  });

  it("Should show error message if fetching users fails", async () => {
    // Arrange
    const error = "An error happened";
    const fetchFn = jest.fn().mockImplementation(() => Promise.reject(new Error(error)));

    // Act
    renderWithContext(
      <List<Post>
        fetchItemsFn={fetchFn}
        arg={1}
        renderItem={item => <div key={item.id}>{item.id}</div>}
      />
    );

    const errorMsg = await screen.findByText(error);
    expect(errorMsg).toBeInTheDocument();
  });

  it("Should show generic error message if fetching users fails", async () => {
    // Arrange
    const fetchFn = jest.fn().mockImplementation(() => Promise.reject(new Error()));

    // Act
    renderWithContext(
      <List<Post>
        fetchItemsFn={fetchFn}
        arg={1}
        renderItem={item => <div key={item.id}>{item.id}</div>}
      />
    );

    const errorMsg = await screen.findByText("Failed to fetch");
    expect(errorMsg).toBeInTheDocument();
  });
});
