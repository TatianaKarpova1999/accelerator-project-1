import {Navigation} from 'swiper/modules';
import Swiper from 'swiper';

new Swiper('.swiper-reviews', {
  modules: [Navigation],
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: -178,
      allowTouchMove: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    1366: {
      slidesPerView: 1,
      spaceBetween: -240,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});
