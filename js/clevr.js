$(document).ready(function () {
  $('nav').load('navbar.html');
  $('#about').load('about.html');
  $('footer').load('footer.html');

  // header slider
  var swiper = new Swiper('.mySwiper1', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: { delay: 2000, disableOnInteraction: false },
    breakpoints: {
      570: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 2,
        spaceBetween: 65,
      },
      770: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 1,
        spaceBetween: 55,
      },
    },
  });

  // best sellers
  var swiper = new Swiper('.mySwiper2', {
    spaceBetween: 40,

    loop: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      930: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        // spaceBetween: 60,
      },
      1350: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 1,
      },
    },
  });

  // testimonials
  var swiper = new Swiper('.mySwiper3', {
    spaceBetween: 25,

    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,

        spaceBetween: 0,
      },
      420: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
});
