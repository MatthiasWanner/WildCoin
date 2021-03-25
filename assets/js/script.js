const buttonBurger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('pivot');
    navMenu.classList.toggle('nav-menu-animation');
});



let buttonSubmit = document.getElementById('button')
console.log(buttonSubmit)
buttonSubmit.addEventListener('click', function(e){
    buttonSubmit.preventDefault();
})

