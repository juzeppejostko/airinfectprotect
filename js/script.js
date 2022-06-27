const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const button = document.querySelector(".header__button");
const logo = document.querySelector(".header__logo");
let swiper;
let swiper_2;

var image = document.getElementsByClassName('thumbnail');
var simple = new simpleParallax(image, {
        scale: 1.2,
        delay: 0.5,

});

burger.addEventListener(
    "click",
    function (event) {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        button.classList.toggle("active");
        document.body.classList.toggle("lock");
        logo.classList.toggle("active");
        header.classList.toggle("active");
    }
)

swiper = new Swiper('.swiper', {
        speed: 400,
        autoHeight: true,
        loop: true,
        autoplay: {delay: 3000},
        grabCursor: true,
        keyboard: {
                enabled: true,
        }
});

swiper_2 = new Swiper('.preview__swiper',{
        speed: 400,
        loop: true,
        autoplay: {delay: 3000},
        keyboard: {
                enabled: true,
        },
        slidesPerView: 1,
        spaceBetween: 80,
        breakpoints: {680:{spaceBetween: 30, slidesPerView: 1.3},}
})

document.querySelectorAll(".chars__tab-link").forEach(item => {
        item.addEventListener("click", e => {
                e.preventDefault();
                const id = e.target.getAttribute("href").replace("#", "");
                document.querySelectorAll(".chars__tab-link").forEach(child => child.classList.remove("chars__tab-link--active"));
                document.querySelectorAll(".chars__tab-container").forEach(child => child.classList.remove("chars__tab-container--active"));
                item.classList.add("chars__tab-link--active");
                document.getElementById(id).classList.add("chars__tab-container--active");
        })
})
document.querySelector(".chars__tab-link").click();
new WOW().init();