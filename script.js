// Get elements from the page as HTML objects
const hrsElem = document.querySelector(".js-hrs");
const minsElem = document.querySelector(".js-mins");
const secElem = document.querySelector(".js-sec");

// Update time every second
setInterval(() => {
  let currentTime = new Date();

  // Update the hours minutes and seconds on the page
  hrsElem.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minsElem.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secElem.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
