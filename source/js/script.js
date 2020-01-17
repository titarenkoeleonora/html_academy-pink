
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageheader = document.querySelector('.page-header');
var colorMenu = false;

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    } else {
      navMain.classList.add('main-nav--opened');
      navMain.classList.remove('main-nav--closed');
    }
    colorMenu = !colorMenu
    console.log(colorMenu)
    if(colorMenu) {
      pageheader.classList.remove('page-header--close');
      pageheader.classList.add('page-header--open');
    } else {
      pageheader.classList.remove('page-header--open');
      pageheader.classList.add('page-header--close');
    }
  });
