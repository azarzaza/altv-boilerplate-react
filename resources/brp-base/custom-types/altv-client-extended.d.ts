import * as altv from "alt-client";

declare module "alt-client" {
  export function onServer(
    eventName: "init_client",
    listener: (...args: any[]) => void
  ): void;
  export function emitServer(name: "initialized_client", ...args: any[]): void;
}
