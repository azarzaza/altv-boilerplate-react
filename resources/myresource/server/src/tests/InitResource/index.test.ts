jest.mock("alt-server");
import * as alt from "alt-server";
import "../../modules/InitResource";

describe("Test InitResource module", () => {
  it("should do", () => {
    const logSpy = jest.spyOn(alt, "log");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Resource has been loaded.");
  });
});
