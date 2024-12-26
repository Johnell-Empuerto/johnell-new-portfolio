document.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const navLogo = document.getElementById("nav-logo");
  const navLinks = document.querySelectorAll(".nav-custom-link");
  const navbarBtn = document.querySelector(".navbar-btn");

  if (document.documentElement.scrollTop > 86) {
      navbar.classList.add("sticky");
      navLogo.classList.add("color-white");
      navLinks.forEach(link => link.classList.add("color-white"));
      navbarBtn.classList.add("nav-btn-icon");
  } else {
      navbar.classList.remove("sticky");
      navLogo.classList.remove("color-white");
      navLinks.forEach(link => link.classList.remove("color-white"));
      navbarBtn.classList.remove("nav-btn-icon");
  }
});
