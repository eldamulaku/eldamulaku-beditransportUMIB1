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

  // --- CONTACT FORM VALIDATION & LOCALSTORAGE ---
  const form = document.querySelector(".emContact");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!name || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Save to localStorage as array of objects
      const contactData = { name, email, message };
      let allContacts = [];
      try {
        const existing = localStorage.getItem("contactData");
        if (existing) {
          allContacts = JSON.parse(existing);
          if (!Array.isArray(allContacts)) allContacts = [];
        }
      } catch (err) {
        allContacts = [];
      }
      allContacts.push(contactData);
      localStorage.setItem("contactData", JSON.stringify(allContacts));

      alert(
        "Thank you for contacting us, " +
          name +
          "! We will get back to you soon."
      );
      form.reset();
    });
  }
});
