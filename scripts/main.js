import { c, f } from "../vendor/swiper/shared/utils.min.mjs";
import Swiper from "../vendor/swiper/swiper-bundle.min.mjs";
import { themeSwitcher } from "../vendor/theme-switcher/theme-switcher.js";
new themeSwitcher();

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu ul");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

const swiper = new Swiper(".head-slider", {
  effect: "slide",
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      updateSlideCounter(this);
    },
    slideChange: function () {
      updateSlideCounter(this);
    },
  },
});

function updateSlideCounter(swiperInstance) {
  const realIndex = swiperInstance.realIndex + 1;
  const totalSlides = swiperInstance.slides.length;
  const counterElement = document.querySelector(".slider-bottom__count .value");

  if (counterElement) {
    counterElement.textContent = `${realIndex} / ${totalSlides}`;
  } else {
    console.warn("Элемент .slider-bottom__count .value не найден");
  }
}
