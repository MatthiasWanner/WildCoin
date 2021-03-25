let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let classList = document.documentElement.classList
let wStorage = window.localStorage.getItem('theme')
const theme = document.documentElement.classList;





const keepToggle = () => {


    
  

    if (wStorage == "light"){
        theme.add("theme-light")
    } else if (wStorage == "dark"){
        theme.add("theme-dark")
    }
 


}


keepToggle()






const swapTheme = (e) => {

    console.log(wStorage)




    if (wStorage == "dark"){
        theme.toggle("theme-light")
        window.localStorage.setItem('theme','light')
        document.documentElement.classList.add("theme-light")
        document.documentElement.classList.remove("theme-dark")
        
    } else {
        theme.toggle("theme-dark")
        window.localStorage.setItem('theme','dark')
        document.documentElement.classList.remove("theme-light")
        document.documentElement.classList.add("theme-dark")
    }





  



}

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