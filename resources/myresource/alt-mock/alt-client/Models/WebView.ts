import { EventEmitter } from "events";

export default class WebView extends EventEmitter {
  url: string;
  constructor(url: string) {
    super();
    this.url = url;
  }

  destroy = (): void => {};
}
