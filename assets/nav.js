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
