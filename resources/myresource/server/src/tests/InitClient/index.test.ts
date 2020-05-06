jest.mock("alt-server");
import * as alt from "alt-server";
// @ts-ignore
import { __RewireAPI__ as InitClientRewireAPI } from "../../modules/InitClient";

const { Player } = jest.requireActual("alt-server");
describe("Test InitClient module", () => {
  it("should do", () => {
    const player = new Player("testplayer");
    const emitClientSpy = jest.spyOn(alt, "emitClient");

    process.env.VIEW_URL = "testtheurl";

    const sendClientVariables = InitClientRewireAPI.__get__(
      "sendClientVariables"
    );
    sendClientVariables(player);
    expect(alt.on).toBeCalledTimes(1);
    expect(emitClientSpy).toBeCalledTimes(1);
    expect(emitClientSpy).toBeCalledWith(player, "init_client", {
      VIEW_URL: process.env.VIEW_URL,
    });
  });
});
