/** @format */

const LiNodes = document.getElementsByTagName("li");
const widgetNodes = document.querySelectorAll(".widget");
// const statNode = document.getElementById();

for (el of LiNodes) {
  el.style = "color:blue;";
}

const h2Element = widgetNodes[1].getElementsByTagName("h2").item(0);
h2Element.innerText = "Reports";

const pElement = widgetNodes[2].getElementsByTagName("p").item(0);
pElement.innerText = "Optimise performance metrics here.";