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
// RATING STARS JS
const stars = document.querySelectorAll(".star-rating .star");
const ratingValue = document.getElementById("rating-value");
let rated = false;

stars.forEach((star) => {
  star.addEventListener("click", function () {
    if (!rated) {
      const value = this.getAttribute("data-value");
      highlightStars(value);
      ratingValue.textContent = `You rated us ${value} star${
        value > 1 ? "s" : ""
      }!`;
      alert("Thank you for your rating!");
      rated = true;
    }
  });

  star.addEventListener("mouseover", function () {
    if (!rated) {
      highlightStars(this.getAttribute("data-value"));
    }
  });

  star.addEventListener("mouseout", function () {
    if (!rated) {
      highlightStars(0);
    }
  });
});

function highlightStars(count) {
  stars.forEach((star) => {
    if (star.getAttribute("data-value") <= count) {
      star.style.color = "#FFD700";
    } else {
      star.style.color = "";
    }
  });
}
