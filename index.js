function toggleMenu() {
    const navLinks = document.querySelector('.emNavLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

const burger = document.querySelector('.burger');
if (burger) {
    burger.addEventListener('click', toggleMenu);
}

function closeMenuOnLinkClick() {
    const navLinks = document.querySelector('.emNavLinks');
    if (!navLinks) return;
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });
}
closeMenuOnLinkClick();
