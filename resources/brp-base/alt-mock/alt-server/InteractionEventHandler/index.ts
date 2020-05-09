import { EventEmitter } from "events";

class ServerEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  emitServerEvent = (eventName: string, ...data: any) => {
    this.emit(eventName, ...data);
  };
}
export default new ServerEventEmitter();
