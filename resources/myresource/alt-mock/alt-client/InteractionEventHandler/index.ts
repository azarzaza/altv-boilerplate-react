import { EventEmitter } from "events";

class ClientEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  emitClientEvent = (eventName: string, ...data: any) => {
    this.emit(eventName, ...data);
  };
}
export default new ClientEventEmitter();
