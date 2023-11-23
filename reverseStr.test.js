const reverseStr = require("./reverseStr");

describe("A function that takes a string and returns it reversed.", () => {
  test("reverse the string", () => {
    expect(reverseStr("house")).toBe("esuoh");
  });
});
