/** @format */

// 1. use document.getElementById to select the searchTerm Button
var searchTerm = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", onClickSearhButton);

function onClickSearhButton() {
  const search = searchTerm.value.trim();
  if (!search) return (searchTerm.value = "");

  const li = document.createElement("li");
  li.innerText = search;
  document.getElementById("searches").appendChild(li);
  searchTerm.value = "";
}
