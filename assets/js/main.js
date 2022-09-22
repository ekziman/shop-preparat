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
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.boxing .box-container .box')];
  for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
  }
  currentItem += 4;
    if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
    }
}