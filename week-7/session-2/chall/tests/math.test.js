/** @format */

const { add, subtract, multiply, divide } = require("../math");

describe("Add Test", () => {
  test("Add", () => {
    expect(() => add(1, 2).toBe(3));
  });
  test("Add (NaN A)", () => {
    expect(() => add("1", 2).toThrow("Inputs must be numbers"));
  });
  test("Add (NaN B)", () => {
    expect(() => add(1, "2").toThrow("Inputs must be numbers"));
  });
  test("Add (NaN AB)", () => {
    expect(() => add(undefined, undefined).toThrow("Inputs must be numbers"));
  });
});

describe("Subtract Test", () => {
  test("Subtract", () => {
    expect(() => subtract(1, 2).toBe(-1));
  });
  test("Subtract (NaN A)", () => {
    expect(() => subtract("1", 2).toThrow("Inputs must be numbers"));
  });
  test("Subtract (NaN B)", () => {
    expect(() => subtract(1, "2").toThrow("Inputs must be numbers"));
  });
  test("Subtract (NaN AB)", () => {
    expect(() =>
      subtract(undefined, undefined).toThrow("Inputs must be numbers")
    );
  });
});

describe("Multiply Test", () => {
  test("Multiply", () => {
    expect(() => multiply(1, 2).toBe(2));
  });
  test("Multiply (NaN A)", () => {
    expect(() => multiply("1", 2).toThrow("Inputs must be numbers"));
  });
  test("Multiply (NaN B)", () => {
    expect(() => multiply(1, "2").toThrow("Inputs must be numbers"));
  });
  test("Multiply (NaN AB)", () => {
    expect(() =>
      multiply(undefined, undefined).toThrow("Inputs must be numbers")
    );
  });
});

describe("Divide Test", () => {
  test("Divide", () => {
    expect(() => divide(1, 2).toBe(0.5));
  });
  test("Divide (NaN A)", () => {
    expect(() => divide("1", 2).toThrow("Inputs must be numbers"));
  });
  test("Divide (NaN B)", () => {
    expect(() => divide(1, "2").toThrow("Inputs must be numbers"));
  });
  test("Divide (NaN AB)", () => {
    expect(() =>
      divide(undefined, undefined).toThrow("Inputs must be numbers")
    );
  });
});
