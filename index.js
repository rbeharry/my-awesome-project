
alert("Welcome! Enter your name in the box below for a personalized greeting!");

function searchName(event) {
  event.preventDefault();
  let searchElement = document.querySelector(".search-input");

  let newElement = document.querySelector(".current-text-title");
 newElement.innerHTML = "Hello " + searchElement.value + ""+ ", welcome to my site!";
}
let newHeader = document.querySelector("form");
newHeader.addEventListener("submit", searchName);

new Typewriter("#typewriter", {
  strings: "Front-end developer + communications specialist",
  autoStart: true,
});

// Example usage:
// const myElement = document.getElementById('myDiv');
// fadeOut(myElement);