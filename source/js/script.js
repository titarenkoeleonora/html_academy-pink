
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageheader = document.querySelector('.page-header');
var some = false;

  // navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    some = !some
    console.log(some)
    if(some) {
      pageheader.classList.remove('page-header--open');
      pageheader.classList.add('page-header--close');
    } else {
      pageheader.classList.remove('page-header--close');
      pageheader.classList.add('page-header--open');
    }
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
