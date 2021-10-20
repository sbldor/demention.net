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

const articleSwiper = new Swiper(".article-slider__swiper", {
    navigation: {
        nextEl: ".article-slider__button-next",
        prevEl: ".article-slider__button-prev",
    },
    pagination: {
        el: ".article-slider__pagination",
        clickable: true,
    },
    slidesPerView: 1,
});

const popupMenu = document.querySelector(".popup_type_menu");
const buttonOpenPopup = document.querySelector(".header__burger");
const buttonClosePopup = document.querySelector(".popup__close-button_type_menu");
const pageBody = document.querySelector(".body");
const burgerLink = document.querySelector(".popup__links");

const openPopup = function(popup) {
    popup.classList.add("popup_opened");
};

const closePopup = function(popup) {
    popup.classList.remove("popup_opened");
};

const bodyLock = function(body) {
  body.classList.add("body_locked");
};

const bodyUnlock = function(body) {
  body.classList.remove("body_locked");
};

buttonOpenPopup.addEventListener("click", function () {openPopup(popupMenu), bodyLock(pageBody)});
buttonClosePopup.addEventListener("click", function () {closePopup(popupMenu), bodyUnlock(pageBody)});

popupMenu.addEventListener("click", function(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupMenu);
        bodyUnlock(pageBody);
    }
});

burgerLink.addEventListener("click", function () {closePopup(popupMenu), bodyUnlock(pageBody)});

const sponsorsSwiper = new Swiper('.sponsors__swiper', {

    navigation: {
        nextEl: '.sponsors__swiper-button-next',
        prevEl: '.sponsors__swiper-button-prev'
    },

    pagination: {
        el: '.sponsors__swiper-pagination',
        clickable: true,

    },

    spaceBetween: -20,

    slidesPerGroup: 1,

    loop: true,

    autoplay: {

        delay: 2000,

        stopOnLastSlide: false,

        disableOnInteraction: true
    },

    speed: 1000,

    breakpoints: {
        319: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 4,
        },
        860: {
            slidesPerView: 5,
        }
    },

    ally: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
    }
});
