
function searchName(event) {
  event.preventDefault();
  let searchElement = document.querySelector(".search-input");

  let newElement = document.querySelector(".current-text-title");
 newElement.innerHTML = "Hello " + searchElement.value + ""+ ", welcome to my awesome webpage!";
}
let newHeader = document.querySelector("form");
newHeader.addEventListener("submit", searchName);