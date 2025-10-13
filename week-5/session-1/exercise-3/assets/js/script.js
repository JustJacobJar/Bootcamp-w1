/**
 * Default browser api way of fetching
 * Not available on Node.js runtimes, only in browsers.
 */
function sendFetchRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Fetch API:", data))
    .catch((error) => console.error("Fetch error:", error));
}

/**
 * Axios has the option to cancel the request.
 * Axios also helps fill out the headers for things like POST requests.
 * 
 */
function sendAxiosRequest() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("Axios:", response.data))
    .catch((error) => console.error("Axios error:", error));
}

/**
 * Normalized fetch requests across all browsers.
 */
function sendAjaXRequest() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    success: function (data) {
      console.log("jQuery.ajax:", data);
    },
    error: function (error) {
      console.error("jQuery error:", error);
    },
  });
}

/**
 * XHR can trigger a call on page load.
 * Has a readyState which shows the status of the request
 * Old way of doing it.
 * No JSON format
 */
function sendXHRRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("XHR:", xhr.responseText);
    } else {
      console.error("XHR error:", xhr.status);
    }
  };
  xhr.send();
}

document.getElementById("fetch").addEventListener("click", sendFetchRequest);
document.getElementById("axios").addEventListener("click", sendAxiosRequest);
document.getElementById("ajax").addEventListener("click", sendAjaXRequest);
document.getElementById("xhr").addEventListener("click", sendXHRRequest);
