let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".nav");

menuIcon.onclick = (eo) => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    eo.preventDefault()
};