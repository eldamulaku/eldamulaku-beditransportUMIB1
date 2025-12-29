document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".emNavLinks");
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  function handleMenu() {
    if (mobileQuery.matches) {
      navLinks.style.display = "none";
      menuToggle.addEventListener("change", toggleNav);
    } else {
      navLinks.style.display = "";
      menuToggle.removeEventListener("change", toggleNav);
    }
  }

  function toggleNav() {
    if (menuToggle.checked) {
      navLinks.style.display = "block";
    } else {
      navLinks.style.display = "none";
    }
  }

  mobileQuery.addEventListener("change", handleMenu);
  handleMenu();
});
// RATING JS
const stars = document.querySelectorAll(".star-rating .star");
let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseenter", function () {
    const val = parseInt(this.getAttribute("data-value"));
    highlightStars(val);
  });

  star.addEventListener("mouseleave", function () {
    highlightStars(currentRating);
  });

  star.addEventListener("click", function () {
    currentRating = parseInt(this.getAttribute("data-value"));
    highlightStars(currentRating);
  });
});

function highlightStars(rating) {
  stars.forEach((star) => {
    const val = parseInt(star.getAttribute("data-value"));
    if (val <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}
