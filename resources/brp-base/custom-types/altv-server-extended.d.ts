import * as altv from "alt-server";
declare module "alt-server" {
  export function onClient(
    eventName: "initialized_client",
    listener: (...args: any[]) => void
  ): void;

  export function emitClient(
    player: Player | null,
    eventName: "init_client",
    ...args: any[]
  ): void;
}
