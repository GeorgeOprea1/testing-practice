const calculator = require("./calculator");

describe("Testing calculator function", () => {
  test("calculator functions", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.multiply(3, 2)).toBe(6);
  });
});
