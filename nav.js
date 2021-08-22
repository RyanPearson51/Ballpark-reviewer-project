const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n=> n.addEventListener("click", closeMenu))

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("responsive");
    navMenu.classList.toggle("responsive");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}