import config from "../../modules/utils/config";
import { generateViewLink } from "../../modules/utils/";

describe("Test the utils", () => {
  it("should generate a proper url", () => {
    const base = "viewurl/";
    const path = "login";
    config.VIEW_URL = "viewurl/";
    const generatedUrl = generateViewLink("login");
    expect(generatedUrl).toBe(base + path);
  });
});
