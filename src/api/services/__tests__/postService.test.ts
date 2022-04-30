import { FetchConfig } from "~/api/apiCall";
import { commentsFixture } from "~/testUtils/fixtures/commentsFixture";
import { postFixture } from "~/testUtils/fixtures/postFixture";
import { postsFixture } from "~/testUtils/fixtures/postsFixture";
import { fetchPost, fetchPostComments, fetchPosts } from "../postService";

const mockApiCall = jest.fn();
jest.mock("../../apiCall.ts", () => ({
  apiCall: (config: FetchConfig) => mockApiCall(config)
}));

describe("User service tests", () => {
  beforeEach(() => {
    mockApiCall.mockClear();
  });

  it("Should return all posts", async () => {
    // Arrange
    const start = 0;
    const limit = 10;
    const userId = 0;
    mockApiCall.mockImplementation(() => Promise.resolve(postsFixture));

    // Act
    const response = await fetchPosts(start, limit, userId);

    // Assert
    expect(response).toStrictEqual(postsFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: "posts?_start=0&_limit=10"
    });
  });

  it("Should return all posts by user id", async () => {
    // Arrange
    const start = 0;
    const limit = 10;
    const userId = 1;
    mockApiCall.mockImplementation(() => Promise.resolve(postsFixture));

    // Act
    const response = await fetchPosts(start, limit, userId);

    // Assert
    expect(response).toEqual(postsFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: "posts?_start=0&_limit=10&userId=1"
    });
  });

  it("Should return post by id", async () => {
    // Arrange
    const postId = "1";
    mockApiCall.mockImplementation(() => Promise.resolve(postFixture));

    // Act
    const response = await fetchPost(postId);

    // Assert
    expect(response).toEqual(postFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: `posts/${postId}`
    });
  });

  it("Should return post comments", async () => {
    // Arrange
    const start = 0;
    const limit = 10;
    const postId = 1;
    mockApiCall.mockImplementation(() => Promise.resolve(commentsFixture));

    // Act
    const response = await fetchPostComments(start, limit, postId);

    // Assert
    expect(response).toStrictEqual(commentsFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: "posts/1/comments?_start=0&_limit=10"
    });
  });
});
