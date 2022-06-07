const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const button = document.querySelector(".header__button");
const logo = document.querySelector(".header__logo");

burger.addEventListener(
    "click",
    function (event) {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        button.classList.toggle("active");
        document.body.classList.toggle("lock");
        logo.classList.toggle("active");
    }
)
