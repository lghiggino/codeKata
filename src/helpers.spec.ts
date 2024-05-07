import { concat } from "./helpers";

describe("concat", () => {
  it("should concatenate its arguments", () => {
    const concatenatedString = concat("Hello", "World");
    expect(concatenatedString).toBe("Hello World");
  });
});
