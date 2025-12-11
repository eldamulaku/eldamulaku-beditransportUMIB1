document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.emNavLinks');
  const mobileQuery = window.matchMedia('(max-width: 768px)');

  function handleMenu() {
    if (mobileQuery.matches) {
      navLinks.style.display = 'none';
      menuToggle.addEventListener('change', toggleNav);
    } else {
      navLinks.style.display = '';
      menuToggle.removeEventListener('change', toggleNav);
    }
  }

  function toggleNav() {
    if (menuToggle.checked) {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  }

  mobileQuery.addEventListener('change', handleMenu);
  handleMenu();
});