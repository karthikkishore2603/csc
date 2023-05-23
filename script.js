//----------------------NAVBAR----------------------//

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
  navCloseBtn1 = document.querySelector(".navCloseBtn1");
  navCloseBtn2 = document.querySelector(".navCloseBtn2");
  navCloseBtn3 = document.querySelector(".navCloseBtn3");
  navCloseBtn4 = document.querySelector(".navCloseBtn4");
  navCloseBtn5 = document.querySelector(".navCloseBtn5");
  navCloseBtn6 = document.querySelector(".navCloseBtn6");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navCloseBtn1.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

navCloseBtn2.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navCloseBtn3.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navCloseBtn4.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navCloseBtn5.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navCloseBtn6.addEventListener("click", () => {
nav.classList.remove("openNav");
});




let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-links");
let navLinks = navBar.querySelectorAll("li");

navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

