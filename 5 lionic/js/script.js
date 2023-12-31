let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articles__item');

btnMore.addEventListener('click', () => {
  articlesItems.forEach(el => { el.classList.add('articles__item--visible') });
  btnMore.closest('.articles__center').classList.add('articles__center--hidden');
});

const buttonMore = document.querySelector('.services-more');
const servicesList = document.querySelectorAll('.services__list');

buttonMore.addEventListener('click', () => {
  servicesList.forEach(el => { el.classList.add('services__list--visible') });
  buttonMore.closest('.services__center').classList.add('services__center--hidden');
});