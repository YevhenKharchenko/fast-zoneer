import Swiper from 'swiper';
import 'swiper/css/bundle';

const essaysDots = document.querySelectorAll('.essays-dot');

let essaysSwiper;

essaysSwiper = new Swiper('.essays-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 18,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.essays-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateEssaysDots(this.realIndex);
    },
  },
});

function updateEssaysDots(index) {
  essaysDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

essaysDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    essaysSwiper.slideTo(index);
  });
});
