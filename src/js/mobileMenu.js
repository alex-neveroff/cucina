(() => {
  const openMenuBtn = document.querySelector('[menu-open]');
  const closeMenuBtn = document.querySelectorAll('[menu-close]');
  const mobileMenu = document.querySelector('[menu]');
  const mobileMenuList = document.querySelector('.menu-list');
  const body = document.querySelector('body');

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.forEach(btn => btn.addEventListener('click', closeMenu));
  mobileMenuList.addEventListener('click', closeMenu);
  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  function openMenu() {
    mobileMenu.classList.add('is-opened');
    body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-opened');
    body.classList.remove('no-scroll');
  }
})();
