/** @format */

// TODO: Add 2 new items to the sidebar called "Register" and "Help".

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?

const sidebarNode = document.querySelector(".sidebar").children.item(1);
const newLi = document.createElement("li");
newLi.innerText = "Register";
const newLi2 = document.createElement("li");
newLi2.innerText = "Help";
sidebarNode.appendChild(newLi);
sidebarNode.insertBefore(newLi2, sidebarNode.children.item(3));