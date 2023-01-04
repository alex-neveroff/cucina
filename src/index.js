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

// Mobile menu

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelector('[menu-close]'),
    closeMenuBtn1: document.querySelector('[menu-close1]'),
    menu: document.querySelector('[menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn1.addEventListener('click', toggleModal);
  refs.menuList.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-opened');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Modal Contacts

(() => {
  const refs = {
    openContactModalBtn: document.querySelector('.contacts-open'),
    openContactModalBtn1: document.querySelector('.contacts-open1'),
    closeContactModalBtn: document.querySelector('.contacts-close'),
    contactModal: document.querySelector('.contact-modal'),
    body: document.querySelector('body'),
  };

  refs.openContactModalBtn.addEventListener('click', toggleModal);
  refs.openContactModalBtn1.addEventListener('click', toggleModal);
  refs.closeContactModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.contactModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Modal Ordering

(() => {
  const refs = {
    openOrderModalBtn: document.querySelector('.order-open'),
    openOrderModalBtn1: document.querySelector('.order-open1'),
    openOrderModalBtn2: document.querySelector('.order-open2'),
    openOrderModalBtn3: document.querySelector('.order-open3'),
    openOrderModalBtn4: document.querySelector('.order-open4'),
    openOrderModalBtn5: document.querySelector('.order-open5'),
    openOrderModalBtn6: document.querySelector('.order-open6'),
    closeOrderModalBtn: document.querySelector('.order-close'),
    orderModal: document.querySelector('.order-modal'),
    body: document.querySelector('body'),
  };

  refs.openOrderModalBtn.addEventListener('click', toggleModal);
  refs.openOrderModalBtn1.addEventListener('click', toggleModal);
  refs.openOrderModalBtn2.addEventListener('click', toggleModal);
  refs.openOrderModalBtn3.addEventListener('click', toggleModal);
  refs.openOrderModalBtn4.addEventListener('click', toggleModal);
  refs.openOrderModalBtn5.addEventListener('click', toggleModal);
  refs.openOrderModalBtn6.addEventListener('click', toggleModal);

  refs.closeOrderModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.orderModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
