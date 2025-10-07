/** @format */

// create your coffee object array here

const form = document.getElementById("form");
const nameField = document.getElementById("name");
const typeField = document.getElementById("type");
const milkField = document.getElementById("milk");
const ulField = document.getElementById("orders");

const orders = [];

function addOrder() {
  if (nameField.value != "" && milkField.value != "") {
    orders.push({
      customer: nameField.value,
      type: typeField.value,
      milk: milkField.value,
    });
  }
  nameField.value = "";
  milkField.value = "";
  typeField.reset();
}

function printOrders() {
  orders.forEach((order, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${index}. Customer:${order.customer}. Coffee:${order.type}. Milk:${order.milk}`;
    ulField.appendChild(li);
  });
}
