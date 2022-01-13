// "use strict"

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header-nav__menu-list');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Slider Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	grabCursor: true,

	autoHeight: true,

 });
 


 