const buttonBurger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('pivot');
    navMenu.classList.toggle('nav-menu-animation');
});

// buttonBurger.addEventListener('mouseover', () => {
//     buttonBurger.classList.toggle('animate-burger');
// });

// buttonBurger.addEventListener('mouseleave', () => {
//     buttonBurger.classList.toggle('animate-burger');
// });



// const animateText = document.querySelector('.footer-content');

// animateText.addEventListener('mouseover', () => {
//     animateText.classList.toggle('animate-footer');
// });

// animateText.addEventListener('mouseleave', () => {
//     animateText.classList.toggle('animate-footer');
// });
