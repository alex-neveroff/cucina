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

$('.slider-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
});

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelector('[menu-close]'),
    menu: document.querySelector('[menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.menuList.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-open'),
    closeModalBtn: document.querySelector('.modal-close'),
    contactModal: document.querySelector('.contact-modal'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.contactModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
