import clientEventEmitter from "../InteractionEventHandler";
import serverEventEmitter from "../../alt-server/InteractionEventHandler";

export const onServer = (eventName: string, callBack: any): void => {
  clientEventEmitter.on(eventName, callBack);
};

export const emitServer = (eventName: string, ...data: any[]): void => {
  serverEventEmitter.emitServerEvent(eventName, ...data);
};

export const log = (message: string): void => {
  console.log(message);
};

export const showCursor = (show: true): void => {};
