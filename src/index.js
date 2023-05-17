// Slider for Products

$(function () {
  $('.slider-products').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="btn btn-up"></button>',
    nextArrow: '<button type="button" class="btn btn-down"></button>',
  });
});

// Slider for Gallery

$('.slider-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
});

// Mobile menu and modals

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelectorAll('[menu-close]'),
    menu: document.querySelector('[menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
    openContactModalBtn: document.querySelectorAll('.contacts-open'),
    closeContactModalBtn: document.querySelector('.contacts-close'),
    contactModal: document.querySelector('.contact-modal'),
    openOrderModalBtn: document.querySelectorAll('.order-open'),
    closeOrderModalBtn: document.querySelector('.order-close'),
    orderModal: document.querySelector('.order-modal'),
  };

  refs.openMenuBtn.addEventListener('click', () =>
    openModal(refs.menu, refs.body)
  );
  refs.closeMenuBtn.forEach(btn =>
    btn.addEventListener('click', () => closeModal(refs.menu, refs.body))
  );
  refs.menuList.addEventListener('click', () =>
    closeModal(refs.menu, refs.body)
  );

  refs.openContactModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(refs.contactModal, refs.body))
  );
  refs.closeContactModalBtn.addEventListener('click', () =>
    closeModal(refs.contactModal, refs.body)
  );

  refs.openOrderModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(refs.orderModal, refs.body))
  );
  refs.closeOrderModalBtn.addEventListener('click', () =>
    closeModal(refs.orderModal, refs.body)
  );

  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      if (!refs.menu.classList.contains('is-hidden')) {
        closeModal(refs.menu, refs.body);
      }
      if (!refs.contactModal.classList.contains('is-hidden')) {
        closeModal(refs.contactModal, refs.body);
      }
      if (!refs.orderModal.classList.contains('is-hidden')) {
        closeModal(refs.orderModal, refs.body);
      }
    }
  }

  function openModal(modal, body) {
    modal.classList.remove('is-hidden');
    body.classList.add('no-scroll');
  }

  function closeModal(modal, body) {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  }
})();
