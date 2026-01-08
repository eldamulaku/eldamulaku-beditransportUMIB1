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

// Weight Calculator
const bigTruckInput = document.getElementById("bigTruckWeight");

// Create a result message element
const resultMsg = document.createElement("div");
resultMsg.id = "weightResult";
bigTruckInput.parentNode.appendChild(resultMsg);

bigTruckInput.addEventListener("input", function () {
  /**
   * The weight of the big truck, converted from the input field value to a number.
   *
   * This takes whatever the user typed into the big truck input box (which is text),
   * and turns it into a real number so you can do math with it. For example, if the user
   * types "5000", this will make weight equal to the number 5000.
   */
  const weight = parseInt(bigTruckInput.value, 10);

  if (isNaN(weight) || weight <= 0) {
    resultMsg.textContent = "";
    return;
  }

  if (weight <= 800) {
    resultMsg.textContent = "We can transport this by a small truck.";
  } else if (weight >= 801 && weight <= 23000) {
    resultMsg.textContent = "We can transport this using a big truck.";
  } else {
    resultMsg.textContent = "Weight exceeds the maximum limit for transport.";
  }
});
