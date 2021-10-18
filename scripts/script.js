const slider = new Swiper('.slyder__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
  },

  })
