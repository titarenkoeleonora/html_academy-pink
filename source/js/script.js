
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageheader = document.querySelector('.page-header');
var colorMenu = false;

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
    colorMenu = !colorMenu
    console.log(colorMenu)
    if(colorMenu) {
      pageheader.classList.remove('page-header--open');
      pageheader.classList.add('page-header--close');
    } else {
      pageheader.classList.remove('page-header--close');
      pageheader.classList.add('page-header--open');
    }
  });
