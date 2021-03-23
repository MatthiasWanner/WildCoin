let sun = document.getElementById('sun');
let moon = document.getElementById('moon');

const swapTheme = (e) => {
    switchTheme(e)
	const theme = document.documentElement.classList;

	theme.toggle('theme-dark');
	theme.toggle('theme-light');
};

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        moon.style.opacity = "1";
        sun.style.opacity = "0"
    }
    else {
        sun.style.opacity = "1";
        moon.style.opacity = "0";
    }    
}

toggleSwitch.addEventListener('change', swapTheme, false);
