import serverEventEmitter from "../InteractionEventHandler";
import clientEventEmitter from "../../alt-client/InteractionEventHandler";
import Player, { testPlayer } from "../Models/Player";

export function onClient(
  eventName: string,
  listener: (...args: any[]) => void
): void {
  serverEventEmitter.on(eventName, (...args) => {
    listener(testPlayer, ...args);
  });
}
export const emitClient = (
  player: Player | null,
  eventName: string,
  ...data: any[]
) => {
  clientEventEmitter.emitClientEvent(eventName, ...data);
};

export const on = () => {};

export const log = (text: string) => {
  console.log(text);
};
