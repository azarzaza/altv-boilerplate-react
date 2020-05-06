import config from "../../modules/utils/config";
const viewUrl = "myviewurl";
const newViewUrl = "mynewurl";

beforeEach(() => {});
describe("Test the config", () => {
  it("should hold all values", () => {
    expect(config.VIEW_URL).toBe("");
    config.VIEW_URL = viewUrl;
    expect(config.VIEW_URL).toBe(viewUrl);
  });

  it("should not override the config", () => {
    config.VIEW_URL = newViewUrl;
    expect(config.VIEW_URL).toBe(viewUrl);
  });
});
