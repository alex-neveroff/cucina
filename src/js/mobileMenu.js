(() => {
  const refs = {
    body: document.querySelector('body'),
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelectorAll('[menu-close]'),
    menu: document.querySelector('[menu]'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.forEach(btn => btn.addEventListener('click', closeMenu));
  refs.menuList.addEventListener('click', closeMenu);
  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  function openMenu() {
    refs.menu.classList.add('is-opened');
    refs.body.classList.add('no-scroll');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-opened');
    refs.body.classList.remove('no-scroll');
  }
})();
