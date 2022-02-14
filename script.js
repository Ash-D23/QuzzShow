let nav__menu = document.querySelector('.navbar__menu');
let nav__icon__menu = document.querySelector('.icon__menu');
let nav__icon__times = document.querySelector('.icon__times');
let navbar__list = document.querySelector('.navbar__list-container')

if(nav__menu){
    nav__menu.addEventListener('click', ()=>{
        nav__icon__menu.classList.toggle('hide');
        nav__icon__times.classList.toggle('hide');
        navbar__list.classList.toggle('navbar__display');
    })
}
