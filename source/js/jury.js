import {Navigation} from 'swiper/modules';
import Swiper from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 230,
      allowTouchMove: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    1366: {
      slidesPerView: 5,
      spaceBetween: 200,
      allowTouchMove: false,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});
