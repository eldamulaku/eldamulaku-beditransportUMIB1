
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('menu-toggle');
  const menu = document.querySelector('.emNavLinks');
  const label = document.querySelector('label[for="menu-toggle"].burger');
  const nav = document.querySelector('.emMainNav');

  if (!menu) {
    console.error('No element with class .emNavLinks found.');
    return;
  }

  // Helper to show/hide based on a boolean
  const setMenuVisible = visible => {
    if (visible) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  };

  // If checkbox exists, listen to its change (preferred for your HTML)
  if (checkbox) {
    // Initialize state from checkbox (in case it was persisted)
    setMenuVisible(checkbox.checked);

    // When checkbox changes, toggle .active on the menu
    checkbox.addEventListener('change', () => setMenuVisible(checkbox.checked));

    // Some CSS/layout can block default label behavior; ensure label click syncs
    if (label) {
      label.addEventListener('click', () => {
        // wait a tiny tick for the checkbox to update, then sync
        setTimeout(() => setMenuVisible(checkbox.checked), 10);
      });
    }
  } else if (label) {
    // No checkbox found but label exists — use label as a button
    label.addEventListener('click', () => setMenuVisible(!menu.classList.contains('active')));
  } else {
    // Ultimate fallback: create a burger button and insert into nav
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'burger fallback-burger';
    btn.innerHTML = '&#9776;';
    btn.addEventListener('click', () => setMenuVisible(!menu.classList.contains('active')));
    if (nav) nav.insertBefore(btn, nav.children[1] || null);
  }

  // Close the menu automatically when the user clicks a link (useful on mobile)
  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A' && window.innerWidth <= 768) {
      setMenuVisible(false);
      if (checkbox) checkbox.checked = false;
    }
  });

  // When viewport becomes desktop size, ensure menu is visible in desktop layout
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // remove mobile classes and leave desktop to handle layout
      setMenuVisible(false);
      if (checkbox) checkbox.checked = false;
    }
  });
});

