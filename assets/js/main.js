/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
    
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER ===============*/
var swiperPopular = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
        delay: 7000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });


/*=============== SHOW/HIDE ===============*/
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Показать ещё";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Скрыть";
      more.style.display = "grid";
      more.style.gridTemplateColumns = "repeat(2, 170px)";
    }
  }