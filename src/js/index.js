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