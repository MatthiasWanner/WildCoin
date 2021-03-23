const buttonBurger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('pivot');
    navMenu.classList.toggle('nav-menu-animation');
});


// const sun = document.querySelector('#sun');
// const moon = document.querySelector('#moon');
// const buttonSwitch = document.querySelector('#checkbox');

// buttonSwitch.addEventListener('click', () => {
//     sun.classList.toggle('on');
//     moon.classList.toggle('off');
// });

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         moon.style.opacity = "1";
//         sun.style.opacity = "0"
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         sun.style.opacity = "1";
//         moon.style.opacity = "0";
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);