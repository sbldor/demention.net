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
const buttonClosePopup = document.querySelector(
  ".popup__close-button_type_menu"
);

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

buttonOpenPopup.addEventListener("click", () => openPopup(popupMenu));
buttonClosePopup.addEventListener("click", () => closePopup(popupMenu));

popupMenu.addEventListener("click", function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupMenu);
  }
});
