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


// aniamtion on screen

document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: '#ffffff'
          },
          shape: {
              type: 'circle',
              stroke: {
                  width: 0,
                  color: '#000000'
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 0.5,
              random: false,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
          },
          move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: {
                  enable: true,
                  mode: 'grab'
              },
              onclick: {
                  enable: true,
                  mode: 'push'
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 140,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: true
  });
});
