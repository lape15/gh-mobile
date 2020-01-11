const toggler = document.querySelectorAll('.navbar-toggler-icon')
const btn = document.querySelector('.btn')


const removeText = document.querySelector('.fade-in')

window.onscroll = function() {myFunction()};

// Get the header
let header = document.querySelector('.head')

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.querySelector('.about')

function redicrect(){
    location.href = '#about_us';
}

// setInterval(() => {
//     // removeText.style.display = 'none';
//     btn.style.display = 'none'
// }, 9000);


// console.log(setInterval)

// const sit = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100,
//     effect: 'slide',
//     loop: 'true',
//     navigation:{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
// }