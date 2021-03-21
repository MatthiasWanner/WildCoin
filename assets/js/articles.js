/* MENU ICONE BURGER */
let menu = document.getElementById("menuNavigation");
let menuButton = document.getElementById("burger");

let burger = document.getElementById("burger");
let menuIcon = document.getElementById(".menu-icon");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("is-opened");
});

menuButton.addEventListener("click", function (e) {
  menu.classList.toggle("menuNavigationDisplay");
  menu.classList.toggle("menuNavigation");
});




