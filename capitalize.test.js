const capitalize = require("./capitalize");

describe("Returns the string with first character capitalaized", () => {
  test("capitalize first charachet", () => {
    expect(capitalize("house")).toBe("House");
  });
});
