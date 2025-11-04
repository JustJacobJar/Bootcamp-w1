/** @format */

// create your 4 function

// export them
const add = (a, b) => {
  if (typeof a !== Number || typeof b !== Number)
    throw new Error("Inputs must be numbers");
  return a + b;
};
const subtract = (a, b) => {
  if (typeof a !== Number || typeof b !== Number)
    throw new Error("Inputs must be numbers");
  return a - b;
};
const multiply = (a, b) => {
  if (typeof a !== Number || typeof b !== Number)
    throw new Error("Inputs must be numbers");
  return a * b;
};
const divide = (a, b) => {
  if (typeof a !== Number || typeof b !== Number)
    throw new Error("Inputs must be numbers");
  return a / b;
};

module.exports = { add, subtract, multiply, divide };
