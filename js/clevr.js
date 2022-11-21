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
      470: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 2,
        spaceBetween: 10,
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
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      525: { slidesPerView: 2, slidesPerGroup: 2 },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 2,
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
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      825: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // flash sale
  var swiper = new Swiper('.mySwiper4', {
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    loop: true,

    slidesPerView: 2,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 30,
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     slidesPerGroup: 1,
    //     // spaceBetween: 0,
    //   },
    //   992: {
    //     slidesPerView: 2,
    //     slidesPerGroup: 1,
    //     // spaceBetween: 100,
    //     slidesPerGroupSkip: 1,
    //   },
    //   1400: {
    //     slidesPerView: 2,

    //     slidesPerGroup: 1,
    //   },
    // },
  });
});
