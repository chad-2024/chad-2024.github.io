const navbarButton = document.querySelector("#navbarButton");
const navbar = document.querySelector(".navbar");

navbarButton.addEventListener("click", function () {
    navbar.classList.toggle("displayMenu");
    navbarButton.classList.toggle("display");
});