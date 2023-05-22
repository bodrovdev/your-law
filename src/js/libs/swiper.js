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

var question_slider_init = false;

function question_slider() {
  if (window.innerWidth <= 1279) {
    if (!question_slider_init) {
      question_slider_init = true;
      var question_slider = new Swiper(".questions__slider", {
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
          el: ".questions__slider-pagination",
          clickable: true,
        },
      });
    }
  } else if (question_slider_init) {
    question_slider.destroy();
    question_slider_init = false;
  }
}
question_slider();
window.addEventListener("resize", question_slider);