const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
menu.classList.toggle("show");
});