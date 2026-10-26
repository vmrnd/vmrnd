import { describe, expect, it } from "vite-plus/test";
import { shopUrl } from "./site.ts";

describe("shopUrl", () => {
  it("points to the external shop", () => {
    expect(shopUrl).toBe("https://shop.vmrnd.com");
  });
});
