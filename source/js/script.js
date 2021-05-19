'use strict';

// menu

var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__menu-button');

navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});


// modal

var form = document.querySelector('promo__right-form');
var fields = form.querySelector('input');
var modalShow = document.querySelector('promo__right-form-button');
var modal = document.querySelector('modal');
var modalClose = document.querySelector('modal__button');


form.addEventListener('submit', function (evt) {
  if (!fields.value) {
    evt.preventDefault();
  }
});

modalShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  form.reset();
});


modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
    }
  }
});
