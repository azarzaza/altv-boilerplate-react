jest.mock("alt-client", () => ({
  ...jest.requireActual("alt-client"),
  emitServer: jest.fn((eventName: string) => {
    return eventName;
  }),
}));
import * as alt from "alt-client";
import * as altServer from "alt-server";
import config from "../../modules/utils/config";

import "../../modules/InitClient";

describe("Test module InitClient", () => {
  it("should init the client", () => {
    const url = "myurl";
    const myConfig = {
      VIEW_URL: url,
    };
    const emitServerSpy = jest.spyOn(alt, "emitServer");
    altServer.emitClient(null, "init_client", myConfig);
    expect(emitServerSpy).toBeCalledTimes(1);
    expect(emitServerSpy).toBeCalledWith("initialized_client");
    expect(config.VIEW_URL).toBe(url);
  });
});
