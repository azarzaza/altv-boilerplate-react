jest.mock("alt-client", () => ({
  ...jest.requireActual("alt-client"),
  log: jest.fn((message: string) => {}),
  showCursor: jest.fn((show: boolean) => {}),
}));

import * as altClient from "alt-client";
import * as altServer from "alt-server";

import "../../modules/GreetPlayer";

describe("Test GreetPlayer module", () => {
  it("should greet the player via console", () => {
    const player = new altServer.Player();
    const logSpy = jest.spyOn(altClient, "log");
    altServer.emitClient(player, "greet_player_console");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Hello player");
  });

  it("should display the cef window", () => {
    const showCursorSpy = jest.spyOn(altClient, "showCursor");

    const player = new altServer.Player();
    altServer.emitClient(player, "greet_player_cef");

    expect(showCursorSpy).toBeCalledTimes(1);
  });
});
