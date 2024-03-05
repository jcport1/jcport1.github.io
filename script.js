const openDiv = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal")

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav__link");


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

// openDiv.addEventListener("click", () => {
//     modal.classList.add("open");
// })

// closeBtn.addEventListener("click", () => {
//     modal.classList.remove("open");
// })