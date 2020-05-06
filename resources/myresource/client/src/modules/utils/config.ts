class Config {
  private _VIEW_URL: string;
  constructor() {
    this._VIEW_URL = "";
  }

  get VIEW_URL(): string {
    return this._VIEW_URL;
  }
  set VIEW_URL(url: string) {
    if (!this._VIEW_URL) {
      this._VIEW_URL = url;
    }
  }
}

export default new Config();
