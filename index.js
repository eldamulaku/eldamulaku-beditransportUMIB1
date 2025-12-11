document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.emNavLinks');

  navLinks.style.display = 'none';

  menuToggle.addEventListener('change', function () {
    if (menuToggle.checked) {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  });
});