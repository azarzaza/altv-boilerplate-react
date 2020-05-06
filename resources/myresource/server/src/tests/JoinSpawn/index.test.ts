jest.mock("alt-server", () => ({
  ...jest.requireActual("alt-server"),
  emitClient: jest.fn((player: any, eventName: string, ...data: any[]) => {}),
}));

import * as alt from "alt-server";
import * as altClient from "alt-client";

import "../../modules/JoinSpawn";
//@ts-ignore
import { __RewireAPI__ as JoinSpawnRewired } from "../../modules/JoinSpawn";

describe("Test JoinSpawn module", () => {
  it("should be true", () => {
    const spawnAndGreetPlayer = JoinSpawnRewired.__get__("spawnAndGreetPlayer");
    const player = new alt.Player();
    player.spawn = jest.fn();
    const emitClientSpy = jest.spyOn(alt, "emitClient");
    altClient.emitServer("initialized_client");

    expect(emitClientSpy).toBeCalledTimes(2);
    expect(emitClientSpy.mock.calls[0][1]).toEqual("greet_player_console");
    expect(emitClientSpy.mock.calls[1][1]).toEqual("greet_player_cef");

    spawnAndGreetPlayer(player);
    expect(player.model).toBe("mp_m_freemode_01");
    expect(player.spawn).toBeCalledTimes(1);
    expect(player.spawn).toBeCalledWith(813, -279, 66, 1000);
  });
});
