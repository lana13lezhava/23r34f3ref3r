const gamburger = document.querySelector("gamburger")
const header__menu = document.querySelector("header__menu")

gamburger.addEventListener("click",() =>{
    gamburger.classList.toggle("active")
    header__menu.classList.toggle("active")
})