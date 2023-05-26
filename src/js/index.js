import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  document.body.classList.toggle('body-cover');

  if (burger.classList.contains('main-nav__burger--active')) {
    lock(mobile_menu);
  }
  else {
    unlock(mobile_menu);
  }
})

//- Закрытие по клику на пустое место
document.addEventListener('click', (e) => {
  if (!document.querySelector('.main-nav').contains(e.target)) {
    burger.classList.remove('main-nav__burger--active');
    mobile_menu.classList.remove('main-nav__nav-menu--mobile--active');
    document.body.classList.remove('body-cover');
    unlock(mobile_menu);
  }
});

// - Закрытие по клику на пункт меню
nav_list.onclick = function (event) {
  let target = event.target;

  if (target.tagName != 'A') {
    return;
  }

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  document.body.classList.remove('body-cover');
  unlock(mobile_menu);
};

// --- Табы в хединге
let tabs_buttons = document.querySelectorAll('.heading__column-tabs-button');
let tabs_items = document.querySelectorAll('.heading__image');

tabs_buttons.forEach((button) => {
  button.addEventListener('click', () => {
    tabs_buttons.forEach((button_item) => { button_item.classList.remove('heading__column-tabs-button--active') })
    button.classList.add('heading__column-tabs-button--active');

    tabs_items.forEach((item) => {
      if (button.dataset.tab === item.dataset.tab) {
        tabs_items.forEach((value) => { value.classList.remove('heading__image--active') });
        item.classList.add('heading__image--active');
      }
    })
  })
})

// --- Кнопка "показать больше" в блоке с ценами
let prices_items = Array.from(document.querySelectorAll('.prices__wrapper-item'));
let price_showmore = document.querySelector('#prices_loadmore');

function showMore() {
  if (prices_items.length <= 5) {
    price_showmore.parentNode.removeChild(price_showmore);
    prices_items.map((item, index) => { index <= 4 ? item.classList.add('prices__wrapper-item--active') : console.log('') });
    return;
  }
  else {
    prices_items.map((item, index) => { index <= 4 ? item.classList.add('prices__wrapper-item--active') : console.log('') });

    price_showmore.addEventListener('click', () => {
      !price_showmore.classList.contains('active') ?
        (function () {
          price_showmore.classList.add('active');
          price_showmore.textContent = 'Скрыть все услуги'
          prices_items.map((item, index) => { index >= 5 ? item.classList.add('prices__wrapper-item--active') : console.log('') });
        }()) :
        (function () {
          price_showmore.classList.remove('active');
          price_showmore.textContent = 'Показать все услуги'
          prices_items.map((item, index) => { index >= 5 ? item.classList.remove('prices__wrapper-item--active') : console.log('') });
        }())
    })
  }
}

showMore();

// --- Рейтинг в блоке отзывов
let slides = document.querySelectorAll('.reviews__people-slider-slide');
slides.forEach((slide) => {
  for (let i = 0; i < slide.dataset.rating; i++) {
    slide.querySelector('.reviews__people-slide-rating').innerHTML +=
      `
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.10869 0.477673L11.0791 4.78855C11.1195 4.88242 11.208 4.9466 11.3099 4.95589L16.0186 5.49762V5.49774C16.2264 5.52054 16.4173 5.62285 16.5516 5.7832C16.6858 5.94355 16.7527 6.14961 16.7385 6.35822C16.7243 6.56683 16.63 6.76191 16.4754 6.9026L12.9845 10.1083C12.9072 10.1758 12.873 10.2802 12.8957 10.3802L13.8356 15.0259C13.8783 15.2304 13.8402 15.4435 13.7292 15.6207C13.6182 15.7978 13.4429 15.9251 13.2402 15.9758C13.0374 16.0266 12.8229 15.9969 12.6415 15.8929L8.51349 13.5634C8.42505 13.512 8.31598 13.512 8.22755 13.5634L4.09859 15.8929H4.09847C3.91713 15.9965 3.70275 16.0261 3.50016 15.9753C3.29759 15.9244 3.12242 15.7972 3.01141 15.6203C2.90053 15.4433 2.86217 15.2304 2.90464 15.0259L3.8444 10.3802V10.3801C3.86708 10.28 3.83306 10.1757 3.75572 10.1082L0.265507 6.90218C0.110591 6.76162 0.0161205 6.56654 0.00188165 6.3578C-0.0123553 6.14908 0.0546056 5.94299 0.188892 5.78254C0.323179 5.62219 0.514285 5.51988 0.722308 5.49731L5.43193 4.95547C5.53376 4.94618 5.62232 4.88199 5.66274 4.78812L7.63239 0.477556C7.71806 0.286805 7.8743 0.13672 8.06818 0.0585452C8.26218 -0.0195151 8.47888 -0.0195151 8.67288 0.0585452C8.86676 0.136726 9.02301 0.286818 9.10866 0.477556L9.10869 0.477673Z" fill="#FE7223"/>
      </svg>
      `
  }
})

// --- Модалка
let modal_buttons = document.querySelectorAll('#modal_button');
let modal = document.getElementById('modal');
let modal_close = document.getElementById('modal_close');
let modal_form = document.getElementById('feedback_form_modal');

modal_buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('modal--active');
    lock(modal);
  })
})

modal_close.addEventListener('click', () => {
  modal.classList.remove('modal--active');
  unlock(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('modal--active');
    unlock(modal);
  }
})

modal_form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.modal__inner').classList.add('modal__inner--hidden');
  document.querySelector('.modal__success').classList.add('modal__success--active');
})

// --- Подтверждение отправки формы
let feedback_forms = [document.querySelector('#feedback_form_1'), document.querySelector('#feedback_form_2')];

feedback_forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('modal--active');
    lock(modal);
    document.querySelector('.modal__inner').classList.add('modal__inner--hidden');
    document.querySelector('.modal__success').classList.add('modal__success--active');
  })
});