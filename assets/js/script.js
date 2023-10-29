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


