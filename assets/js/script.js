const buttonBurger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('pivot');
    navMenu.classList.toggle('nav-menu-animation');
});



