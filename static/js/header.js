document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".main-nav ul");

  // Toggle the menu when the hamburger button is clicked
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close the menu when the user starts scrolling
  window.addEventListener("scroll", () => {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show"); // Close the menu when scrolling
    }
  });
});
