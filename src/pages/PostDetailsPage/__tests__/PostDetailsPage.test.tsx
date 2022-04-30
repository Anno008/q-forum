/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, waitFor } from "@testing-library/react";
import Router from "react-router-dom";
import { commentsFixture } from "~/testUtils/fixtures/commentsFixture";
import { postFixture } from "~/testUtils/fixtures/postFixture";
import { userFixture } from "~/testUtils/fixtures/userFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";
import PostDetailsPage from "../PostDetailsPage";

const mockFetchUser = jest.fn(_ => Promise.resolve(userFixture));
const mockFetchPost = jest.fn(_ => Promise.resolve(postFixture));
const mockFetchComments = jest.fn((_start, _limit, _postId) => Promise.resolve(commentsFixture));

jest.mock("../../../api/services/userService", () => ({
  fetchUser: (id: string) => mockFetchUser(id)
}));
jest.mock("../../../api/services/postService", () => ({
  fetchPost: (id: string) => mockFetchPost(id),
  fetchPostComments: (start: number, limit: number, postId: number) =>
    mockFetchComments(start, limit, postId)
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn()
}));

describe("PostDetailsPage tests", () => {
  it("Should display post title", async () => {
    // Arrange
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });

    // Act
    renderWithContext(<PostDetailsPage />);

    // Assert
    const title = await screen.findByText(postFixture.title);
    expect(title).toBeInTheDocument();
  });

  it("Should display user", async () => {
    // Arrange
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });

    // Act
    renderWithContext(<PostDetailsPage />);

    // Assert
    const user = await screen.findByText(userFixture.username);
    expect(user).toBeInTheDocument();
  });

  it("Should fetch comments on mount", async () => {
    // Arrange
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });

    // Act
    renderWithContext(<PostDetailsPage />);

    await waitFor(() => {
      expect(mockFetchComments).toHaveBeenCalledWith(0, 10, postFixture.id);
    });
  });

  it("Should show error message if fetching post fails", async () => {
    // Arrange
    const error = "An error happened";
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    mockFetchPost.mockImplementation(_ => Promise.reject(new Error(error)));

    // Act
    renderWithContext(<PostDetailsPage />);

    const errorMsg = await screen.findByText(error);
    expect(errorMsg).toBeInTheDocument();
  });

  it("Should show generic error message if fetching post fails", async () => {
    // Arrange
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    mockFetchPost.mockImplementation(_ => Promise.reject(new Error()));

    // Act
    renderWithContext(<PostDetailsPage />);

    const errorMsg = await screen.findByText("Failed to fetch post");
    expect(errorMsg).toBeInTheDocument();
  });
});
