/** @format */

// Given a string, return a URL-friendly version of the string using the following constraints:

//     All letters should be lowercase.
//     All characters that are not letters, numbers, or spaces should be removed.
//     All spaces should be replaced with the URL-encoded space code %20.
//     Consecutive spaces should be replaced with a single %20.
//     The returned string should not have leading or trailing %20.

const generateSlug = (str) => {
  let newStr = str;
  newStr = newStr
    .trim()
    .match(/[\w\s]/g)
    .map((x) => {
      if (x === " ") {
        return "%20";
      } else {
        return x;
      }
    })
    .join("");

  return newStr;
};

console.log(generateSlug("helloWorld")); //helloworld
console.log(generateSlug("hello world!")); //hello%20world
console.log(generateSlug(" hello-world ")); //helloworld
console.log(generateSlug("hello  world")); //hello%20world
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")); //h3110%20w0r1d
