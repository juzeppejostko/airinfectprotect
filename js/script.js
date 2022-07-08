const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const button = document.querySelector(".header__button");
const logo = document.querySelector(".header__logo");
let swiper;
let swiper_2;
let swiper_3;

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

swiper = new Swiper('.slider__slider', {
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


document.querySelectorAll(".functionality__tabs-link").forEach(item =>{
    item.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");

        document.querySelectorAll(".functionality__tabs-link").forEach((child) => child.classList.remove("functionality__tabs-link--active"));
        document.querySelectorAll(".functionality__tabs-tab").forEach((child) => child.classList.remove("functionality__tabs-tab--active"));
        item.classList.add("functionality__tabs-link--active");
        document.getElementById(id).classList.add("functionality__tabs-tab--active");
    })
});

document.querySelector(".functionality__tabs-link").click();

document.querySelector(".functionality__tabs-btn").addEventListener('click', function (e) {
    // body
    document.querySelector(".functionality__tabs-btn").classList.toggle("active");
    if (document.querySelector(".functionality__tabs-btn").classList.contains("active")){
        document.querySelector(".functionality__tabs-btn").innerHTML="Свернуть характеристики"
    } else {
        document.querySelector(".functionality__tabs-btn").innerHTML="Смотреть все характеристики"
    }
    document.querySelectorAll(".functionality__tabs-tab").forEach(item =>{
        item.classList.toggle("active")
    })
});

var vid = document.querySelector('#video');

// video block
/* vid.pause();
window.onscroll = function() {
    vid.currentTime = window.pageYOffset/500;
}; */

new WOW().init();

 document.querySelectorAll(".parts__button-block").forEach((item, index) => {
     item.addEventListener("mouseover", e => {
         //document.querySelector(".parts__text").classList.add("active");
         switch (index){
             case 0:
                 document.querySelector(".parts__text").innerHTML = "Не отвлекает от работы, так как имеет низкий уровень шума (один из самых тихих аппаратов в своей категории, не превышает по громкости привычный уровень шума в офисе)"
                 break;
             case 1:
                 document.querySelector(".parts__text").innerHTML = "Каждые 12 часов запускает термическую обработку фильтров, что позволяет удалять извлеченные из воздуха частицы из фильтра и не превращать сам фильтр в источник скопления инфекции"
                 break;
             case 2:
                 document.querySelector(".parts__text").innerHTML = "Возможность запрограммировать на удобное время работы и автоматический запуск"
                 break;
             case 3:
                 document.querySelector(".parts__text").innerHTML = "Оборудован специальным жидкокристалическим экраном HMI Siemens"
                 break;
             case 4:
                 document.querySelector(".parts__text").innerHTML = "Обеспечивает экономный расход фильтров"
                 break;
             case 5:
                 document.querySelector(".parts__text").innerHTML = "Произведен немецкой компанией с 40-летним стажем поставки оборудования для очищения воздуха в «чистых зонах»"
                 break;
             case 6:
                 document.querySelector(".parts__text").innerHTML = "Органично смотрится в любом помещении"
                 break;
             case 7:
                 document.querySelector(".parts__text").innerHTML = "Безопасен для окружающих и прост в обслуживании"
                 break;
         }
     });
     item.addEventListener("mouseleave", e => {
         //document.querySelector(".parts__text").classList.remove("active");
         switch (index){
             case 0:
             case 1:
             case 2:
             case 3:
             case 4:
             case 5:
             case 6:
             case 7:
                document.querySelector(".parts__text").innerHTML = "";
         }
     })
 })

swiper_3 = new Swiper(".pop-up__slider", {
    navigation: {
        nextEl: ".pop-up__slider-button-next",
        prevEl: ".pop-up__slider-button-prev"
    },
    centeredSlides: true
})