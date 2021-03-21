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

let sun = document.getElementById('sun');
let moon = document.getElementById('moon');


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        moon.style.opacity = "0";
        sun.style.opacity = "0.5"
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        sun.style.opacity = "0";
        moon.style.opacity = "0.5";
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);