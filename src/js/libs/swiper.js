import Swiper from 'swiper/bundle';

var graphic_slider_init = false;

function graphic_slider() {
  if (window.innerWidth <= 1279) {
    if (!graphic_slider_init) {
      graphic_slider_init = true;
      var graphic_slider = new Swiper(".graphic-section__slider", {
        direction: "horizontal",
        spaceBetween: 10,

        breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        },

        pagination: {
          el: ".graphic-section__slider-pagination",
          clickable: true,
        },
      });
    }
  } else if (graphic_slider_init) {
    graphic_slider.destroy();
    graphic_slider_init = false;
  }
}
graphic_slider();
window.addEventListener("resize", graphic_slider);

let question_slider = new Swiper(".questions__slider", {
  direction: "horizontal",
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: "auto",
    },
    1280: {
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.questions__slider-arrow--next',
    prevEl: '.questions__slider-arrow--prev',
  },

  pagination: {
    el: ".questions__slider-pagination",
    clickable: true,
  },
});

let documents_slider = new Swiper(".reviews__documents-slider", {
  direction: "horizontal",
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: "auto",
    }
  },

  navigation: {
    nextEl: '.reviews__documents-arrow--next',
    prevEl: '.reviews__documents-arrow--prev',
  },

  pagination: {
    el: ".reviews__documents-slider-pagination",
    clickable: true,
  },
});

let people_slider = new Swiper(".reviews__people-slider", {
  direction: "horizontal",
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: "auto",
    }
  },

  pagination: {
    el: ".reviews__people-slider-pagination",
    clickable: true,
  },
});