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
