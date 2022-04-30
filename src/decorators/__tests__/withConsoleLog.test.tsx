import { APP_CONSOLE_MESSAGE } from "~/constants/config";
import { renderWithContext } from "~/testUtils/renderWithContext";
import withConsoleLog from "../withConsoleLog";

const TestComponent = () => <div>Test</div>;

const DecoratedTestComponent = withConsoleLog(TestComponent);

describe("WithConsoleLog decorator tests", () => {
  it("Should console log component name", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    renderWithContext(<DecoratedTestComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith(`${APP_CONSOLE_MESSAGE}-${TestComponent.name}`);
  });
});
