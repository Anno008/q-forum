import { FetchConfig } from "~/api/apiCall";
import { userFixture } from "~/testUtils/fixtures/userFixture";
import { usersFixture } from "~/testUtils/fixtures/usersFixture";
import { fetchUser, fetchUsers } from "../userService";

const mockApiCall = jest.fn();
jest.mock("../../apiCall.ts", () => ({
  apiCall: (config: FetchConfig) => mockApiCall(config)
}));

describe("User service tests", () => {
  beforeEach(() => {
    mockApiCall.mockClear();
  });

  it("Should return users", async () => {
    // Arrange
    mockApiCall.mockImplementation(() => Promise.resolve(usersFixture));

    // Act
    const response = await fetchUsers();

    // Assert
    expect(response).toStrictEqual(usersFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: "users"
    });
  });

  it("Should return user by id", async () => {
    // Arrange
    const userId = 1;
    mockApiCall.mockImplementation(() => Promise.resolve(userFixture));

    // Act
    const response = await fetchUser(userId);

    // Assert
    expect(response).toStrictEqual(userFixture);
    expect(mockApiCall).toHaveBeenCalledWith({
      url: `users/${userId}`
    });
  });
});
