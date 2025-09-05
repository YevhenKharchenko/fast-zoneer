import Swiper from 'swiper';
import 'swiper/css/bundle';

const zonesLeftArrow = document.getElementById('zonesLeftArrow');
const zonesRightArrow = document.getElementById('zonesRightArrow');
const zonesDots = document.querySelectorAll('.zones-dot');

let zonesSwiper;

zonesSwiper = new Swiper('.zones-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.zones-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateZonesArrows(this);
      updateArrowIcons();
      updateZonesDots(this.realIndex);
    },
  },
});

updateZonesArrows(zonesSwiper);

function updateZonesArrows(swiper) {
  zonesLeftArrow.disabled = swiper.isBeginning;
  zonesRightArrow.disabled = swiper.isEnd;
}

zonesLeftArrow.addEventListener('click', () => {
  zonesSwiper.slidePrev();
});

zonesRightArrow.addEventListener('click', () => {
  zonesSwiper.slideNext();
});

function updateArrowIcons() {
  const leftIcon = zonesLeftArrow.querySelector('use');
  const rightIcon = zonesRightArrow.querySelector('use');

  if (zonesLeftArrow.disabled) {
    leftIcon.setAttribute('href', './img/sprite.svg#icon-arrow-left-filled');
  } else {
    leftIcon.setAttribute('href', './img/sprite.svg#icon-arrow-left');
  }

  if (zonesRightArrow.disabled) {
    rightIcon.setAttribute('href', './img/sprite.svg#icon-arrow-right-filled');
  } else {
    rightIcon.setAttribute('href', './img/sprite.svg#icon-arrow-right');
  }
}

updateArrowIcons();

function updateZonesDots(index) {
  zonesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

zonesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    zonesSwiper.slideTo(index);
  });
});
