import { apiCall } from "~/api/apiCall";
import { apiUrl } from "~/constants/config";

describe("apiCall tests", () => {
  it("Should return json object when calling apiCall", async () => {
    const jsonMock = {
      value: "test",
      id: 1
    };

    const url = "test";
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ...fetch.prototype,
        json: () => Promise.resolve(jsonMock),
        status: 200
      })
    );
    const response = await apiCall({
      url
    });

    expect(response).toEqual(jsonMock);
    expect(fetchSpy).toHaveBeenCalledWith(`${apiUrl}/${url}`, {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      method: "GET"
    });
  });

  it("Should throw error json when response has a body", async () => {
    const errorJsonMock = "Error";

    const url = "test";
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ...fetch.prototype,
        json: () => errorJsonMock,
        status: 404,
        body: true
      })
    );
    await expect(apiCall({ url })).rejects.toBe(errorJsonMock);

    expect(fetchSpy).toHaveBeenCalledWith(`${apiUrl}/${url}`, {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      method: "GET"
    });
  });

  it("Should format query string if query params are provided", async () => {
    const jsonMock = {
      value: "test",
      id: 1
    };

    const url = "test?param1=1&param2=2";
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ...fetch.prototype,
        json: () => Promise.resolve(jsonMock),
        status: 200
      })
    );
    const response = await apiCall({
      url
    });

    expect(response).toEqual(jsonMock);
    expect(fetchSpy).toHaveBeenCalledWith(`${apiUrl}/${url}`, {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      method: "GET"
    });
  });
});
