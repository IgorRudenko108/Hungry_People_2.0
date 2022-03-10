// "use strict"

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header-nav__menu-list');
const menuBodyBurger = document.querySelector('.menu-list__item a');


if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



// скрытие после клика на пункт меню
const menuLinks = document.querySelectorAll('.menu-list__item a');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
         menuBodyBurger.classList.toggle('_active');
      }

   }
}
// -- /Меню бургер ----------------------------------------------



// -- Прокрутка при клике ---------------------------------------------
const menuLinksGoTo = document.querySelectorAll('.menu-list__item a[data-goto]');
if (menuLinksGoTo.length > 0) {
	menuLinksGoTo.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLinkGoTo = e.target;
		if (menuLinkGoTo.dataset.goto && document.querySelector(menuLinkGoTo.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLinkGoTo.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// -- /Прокрутка при клике ---------------------------------------------



// -- Slider Swiper -------------------------------------------------------------
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
// -- /Slider Swiper -------------------------------------------------------------


// -- Tabs -------------------------------------------------------------
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__items");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
// -- /Tabs -------------------------------------------------------------



//-- Scroll_animation ------------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//-- /Scroll_animation ------------------------------------------------------

