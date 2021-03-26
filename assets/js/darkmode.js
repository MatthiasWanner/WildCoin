let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let wStorage = window.localStorage.getItem('theme')
const theme = document.documentElement.classList;
let select = document.getElementById("checkbox")


const keepToggle = () => {
    if (wStorage === "light"){
        theme.add("theme-light")
    } else if (wStorage === "dark"){
        theme.add("theme-dark")
        select.click()
    }
}

keepToggle()

const swapTheme = (e) => {

    if ( (document.documentElement.classList.contains("theme-dark") === true)){
        
        console.log('light')
        theme.toggle("theme-light")
        window.localStorage.setItem('theme','light')
        document.documentElement.classList.add("theme-light")
        document.documentElement.classList.remove("theme-dark")
    } else if ((document.documentElement.classList.contains("theme-light") === true)){
       
        console.log("dark")
        theme.toggle("theme-dark")
        window.localStorage.setItem('theme','dark')
        document.documentElement.classList.remove("theme-light")
        document.documentElement.classList.add("theme-dark")
    }

   
        if (e.target.checked) {
            moon.style.opacity = "1";
            sun.style.opacity = "0"
        }
        else {
            sun.style.opacity = "1";
            moon.style.opacity = "0";
        }    
}





const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', swapTheme, false);
