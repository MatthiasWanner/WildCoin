const buttonBurger = document.querySelector('.burger');
const navMenu = document.querySelector('#nav-menu');
const buttonBurgerX = document.querySelector('.burger.active');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('active');
    navMenu.classList.toggle('nav-menu-animation');
});


