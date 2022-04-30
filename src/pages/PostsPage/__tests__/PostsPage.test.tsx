/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, waitFor } from "@testing-library/react";
import { commentsFixture } from "~/testUtils/fixtures/commentsFixture";
import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import { userFixture } from "~/testUtils/fixtures/userFixture";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";
import PostsPage from "../PostsPage";

const mockFetchUsers = jest.fn(() => Promise.resolve(usersFixture));
const mockFetchUser = jest.fn(_userId => Promise.resolve(userFixture));
const mockFetchPosts = jest.fn((_start, _limit, _userId) => Promise.resolve(postsFixture));
const mockFetchPostComments = jest.fn((_start, _limit, _postId) =>
  Promise.resolve(commentsFixture)
);

jest.mock("../../../api/services/userService", () => ({
  fetchUsers: () => mockFetchUsers(),
  fetchUser: (userId: number) => mockFetchUser(userId)
}));
jest.mock("../../../api/services/postService", () => ({
  fetchPosts: (start: number, limit: number, userId: number) =>
    mockFetchPosts(start, limit, userId),
  fetchPostComments: (start: number, limit: number, postId: number) =>
    mockFetchPostComments(start, limit, postId)
}));

describe("PostsPage tests", () => {
  it("Should display title", async () => {
    // Act
    renderWithContext(<PostsPage />);

    // Assert
    const title = await screen.findByText("Posts page");
    expect(title).toBeInTheDocument();
  });

  it("Should fetch users on mount", async () => {
    // Act
    renderWithContext(<PostsPage />);

    await waitFor(() => {
      expect(mockFetchUsers).toHaveBeenCalled();
    });
  });

  it("Should show posts", async () => {
    // Act
    renderWithContext(<PostsPage />);

    const postTitle = await screen.findByText(postsFixture[0].title);
    expect(postTitle).toBeInTheDocument();
  });
});
