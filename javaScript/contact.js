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
// CONTACT FORM FOR DATA SAVING
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".emContact");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple output (replace with AJAX/fetch for backend saving)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // alert("Thank you for contacting us!");
    form.reset();
  });
});
// LIVE ALERT FROM BOOTSTRAP
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}
