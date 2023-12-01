'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
//  /**
//    * Testimonials slider
//    */
//  new Swiper('.testimonials-slider', {
//   speed: 600,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20
//     },

//     1200: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     }
//   }
// });




/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



// scipt for contact

window.addEventListener("mousemove", function (e) {
	var to_append = document.getElementsByClassName('loader-container')[0];
	var all = document.getElementsByClassName('loader-container');

	var parent_div = document.createElement('div');
	parent_div.className = "loader-container";
	var inner_div = document.createElement('div');
	inner_div.className = "loader";
	parent_div.appendChild(inner_div)
	var d = document.body.appendChild(parent_div);

	parent_div.style.left = (e.clientX - 50)+'px';
	parent_div.style.top = (e.clientY - 50)+'px';

	if(document.getElementsByClassName('loader-container').length > 50) {
		document.body.removeChild(to_append)
	}
});