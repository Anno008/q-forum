/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, waitFor } from "@testing-library/react";
import { commentsFixture } from "~/testUtils/fixtures/commentsFixture";
import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import { userFixture } from "~/testUtils/fixtures/userFixture";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";
import CommentsPreview from "../CommentsPreview";

const mockFetchPostComments = jest.fn((_start, _limit, _postId) =>
  Promise.resolve(commentsFixture)
);

jest.mock("../../../api/services/postService", () => ({
  fetchPostComments: (start: number, limit: number, postId: number) =>
    mockFetchPostComments(start, limit, postId)
}));

describe("CommentsPreview component tests", () => {
  it("Should show comments", async () => {
    // Act
    renderWithContext(<CommentsPreview postId={1} />);

    // Assert
    const comment = await screen.findByText(commentsFixture[0].email);

    expect(comment).toBeInTheDocument();
  });

  it("Should call fetch comments on mount", async () => {
    // Act
    renderWithContext(<CommentsPreview postId={1} />);

    // Assert
    await waitFor(() => {
      expect(mockFetchPostComments).toHaveBeenCalledWith(0, 2, 1);
    });
  });

  it("Should show error message if fetching user fails", async () => {
    // Arrange
    const error = "An error happened";
    mockFetchPostComments.mockImplementation(_ => Promise.reject(new Error(error)));
    const userId = 1;

    // Act
    renderWithContext(<CommentsPreview postId={1} />);

    const errorMsg = await screen.findByText(error);
    expect(errorMsg).toBeInTheDocument();
  });

  it("Should show generic error message if fetching user fails", async () => {
    // Arrange
    mockFetchPostComments.mockImplementation(_ => Promise.reject(new Error()));
    const userId = 1;

    // Act
    renderWithContext(<CommentsPreview postId={1} />);

    const errorMsg = await screen.findByText("Failed to load comments");
    expect(errorMsg).toBeInTheDocument();
  });
});
