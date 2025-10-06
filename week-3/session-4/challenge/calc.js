/** @format */

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

function calculate(a, b, operation = "") {
  operation = operation.toLowerCase();
  switch (operation) {
    case "add": {
      return add(a, b);
    }
    case "subtract": {
      return subtract(a, b);
    }
    case "multiply": {
      return multiply(a, b);
    }
    case "divide": {
      return divide(a, b);
    }
    default: {
      console.log(
        "Invalid Operation, please use 'add', 'subtract', 'multiply', 'divide'."
      );
      return "Error";
    }
  }
}

const inputA = [1, 2, 3, 4, "five", 5];
const inputB = [2, 4, 6, 8, 10, 0];
const operations = [
  "add",
  "subtract",
  "multiply",
  "divide",
  "square",
  "divide",
];

inputA.forEach((item, index) =>
  console.log(
    `${item} ${operations[index]} ${inputB[index]} = ${calculate(
      item,
      inputB[index],
      operations[index]
    )}`
  )
);
