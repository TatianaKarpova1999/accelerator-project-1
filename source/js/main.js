// https://swiperjs.com/get-started#installation
import {Navigation} from 'swiper/modules';
import Swiper from 'swiper';
import './hero';
import './reviews';
import './about';
import './price';
import './faq';
import './form';

new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 230,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    1366: {
      slidesPerView: 5,
      spaceBetween: 200,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});
