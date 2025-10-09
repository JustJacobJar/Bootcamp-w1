/** @format */

console.log("Hello from script.js");

// What is this?
console.log(window);
// The window the browser is running in. It has access to all of the window api features.
// as well as the document and local storage.

// What is the difference between window and document?
console.log(document);
//All of the details of the Html document. Does not have access to the window api or local storage

// What is the difference between document and document.documentElement?
console.log(window.document);
//Document is the html file itself. 
console.log(document.documentElement);
//Document element is the html page elements only.
//everything inside and including <html>...</html>

// what are the children of the body element?
console.log(document.body.children);
/**
 * Div
 *  div.sidebar...
 *    h2
 *    ul
 *  div.main-content...
 *    h1
 *    div.widget...
 *    div.widget...
 *    div.widget...
 */
