/** @format */

const test = "  This-isBig  News__  ";

console.log(test);
console.log("Trim:" + test.trim());
console.log("To lower case:" + test.toLowerCase());
console.log("Includes T?:" + test.includes("T"));
console.log("Split spaces:" + test.trim().split(" "));
console.log("Split - with space:" + test.replace("-", " "));
