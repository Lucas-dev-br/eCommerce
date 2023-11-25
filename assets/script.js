// For BurgerMenu

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// For Active Menu List

const currentLocation = window.location.href;

  const navbarLinks = document.querySelectorAll(".navbar li a");

  navbarLinks.forEach((link) => {
    if (link.href === currentLocation) {
      link.classList.add("active");
    }
  });