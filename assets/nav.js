let mobileNavButton = document.getElementById("mobile-nav-button");
let footerLinks = document.getElementById("footer-links");
let mobileNav = document.getElementById("mobile-nav");

let body = document.getElementsByTagName("body")[0];

mobileNavButton.addEventListener("click", (e) => {
  mobileNavButton.classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.classList.toggle("no-scroll");
  footerLinks.classList.toggle("mobile-nav-active");
});

let headerLogo = document.getElementById("header-logo");
let scrollPosY = window.scrollY;
window.addEventListener("scroll", (e) => {
  scrollPosY = window.scrollY;
  if (scrollPosY > 0) {
    headerLogo.classList.add("active");
  } else {
    headerLogo.classList.remove("active");
  }
});
