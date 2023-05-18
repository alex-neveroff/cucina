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
