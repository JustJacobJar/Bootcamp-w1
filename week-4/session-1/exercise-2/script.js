/** @format */

// JavaScript Expressions and Conditions Exercise

// 1. Variable Declaration and Assignment
let num1 = 10; // A number
let num2 = "10"; // A string with a numeric value
let isTrue = true; // A boolean

// 2. Using Comparison Operators

// Comparison using '>'
// let isGreater = num1 > 5; // Checks if num1 is greater than 5
// console.log("Is num1 greater than 5?", isGreater); // true

// TODO: Comparison using '<='
console.log("Is num1 greater or equal to 5?", num1 >= 12 ? "Yes" : "No");

// 3. Strict vs. Value Comparison
// TODO: Value comparison using '=='
console.log("num1 == num2? ", num1 == num2);

// TODO: Strict comparison using '==='
// 4. Conditional Statements
console.log("num1 === num2? ", num1 === num2);

// Another conditional statement to check if num1 is greater than 15

// 5. TODO - Conditional Statements with Logical Operators
num1 = 8; //made number 8 so that it is true
if (num2 === "10" && num1 < 10) {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

// TODO: what's the difference between the && and || operators?

// && = AND, both have to be true for it to be true
// || = OR, only one has to be true for it to be true

/// TODO: Add a conditional statement to check if num1 is less than 15 and num2 is exactly equal to '10'.
if (num1 < 15 && num2 === "10") {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

//Fun Stuff
const outputNode = document.getElementById("numOut");
const btnNode = document.getElementById("numBtn");

/**
 * @summary
 * This uses a bitwise operator.
 * In this case, bitwise AND, which compares the first binary digits together
 * 1 in binary is 0001
 * 2 is           0010
 * 3 is           0011
 * 
 *
 * If both numbers have a 1 in the last digit, it must be odd
 */
function oddCheck(num) {
  //Check if it is Not a Number
  if (num == "") {
    outputNode.classList.remove("blue");
    outputNode.classList.remove("red");
    outputNode.innerText = "NaN";
    return;
  }

  //Check if it is odd
  if (num & 1) {
    //odd
    outputNode.innerText = "ODD";
    outputNode.classList.add("red");
    outputNode.classList.remove("blue");
    return;
  } else {
    //even
    outputNode.innerText = "Even";
    outputNode.classList.remove("red");
    outputNode.classList.add("blue");
    return;
  }
}
