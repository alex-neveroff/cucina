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
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
