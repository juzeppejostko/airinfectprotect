const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const button = document.querySelector(".header__button");
const logo = document.querySelector(".header__logo");
const navBtn = document.querySelector(".header__nav-button");
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

        button.addEventListener("click", e =>{
            menu.classList.remove("active")
            burger.classList.remove("active");
            button.classList.remove("active");
            document.body.classList.remove("lock");
            logo.classList.remove("active");
            header.classList.remove("active");
        })
        navBtn.addEventListener("click", e =>{
            menu.classList.remove("active")
            burger.classList.remove("active");
            button.classList.remove("active");
            document.body.classList.remove("lock");
            logo.classList.remove("active");
            header.classList.remove("active");
        })
    }
)
const advantages = document.querySelector(".tech-advantage");
const recommendations = document.querySelector(".letters");
const specialities = document.querySelector(".parts");
const techData = document.querySelector(".functionality");
const materials = document.querySelector(".materials");



document.querySelectorAll(".header__nav-link-text").forEach((item, index) => {
    item.addEventListener("click", e => {
        menu.classList.remove("active")
        burger.classList.remove("active");
        button.classList.remove("active");
        document.body.classList.remove("lock");
        logo.classList.remove("active");
        header.classList.remove("active");
        e.preventDefault();
        if(index == 0){
            let advantagesPos = advantages.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: advantagesPos,
                behavior: "smooth"
            })
        }
        if(index == 1){
            let recommendationsPos = recommendations.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: recommendationsPos,
                behavior: "smooth"
            })
        }
        if(index == 2){
            let specialitiesPos = specialities.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: specialitiesPos,
                behavior: "smooth"
            })
        }
        if(index == 3){
            let techDataPos = techData.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: techDataPos,
                behavior: "smooth"
            })
        }
        if(index == 4){
            let materialsPos = materials.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: materialsPos,
                behavior: "smooth"
            })
        }
    })
})

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

const popup = document.querySelector(".pop-up");

document.querySelectorAll(".letters__link-img").forEach((item, index) => {
    item.addEventListener("click",  (e) => {
        popup.classList.add("active");
        document.body.classList.add("lock");
        if(index === 0){
            swiper_3.slideTo(1);
        }else if(index === 1){
            swiper_3.slideTo(2);
        }else if(index === 2){
            swiper_3.slideTo(3);
        }
    });
});

document.querySelector(".pop-up__cross-wrapper").addEventListener("click", e => {
    popup.classList.remove("active")
    document.body.classList.remove("lock")
});

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

document.querySelectorAll(".parts__button-block").forEach((item, index) => {
    item.addEventListener("mouseover", e => {
        //document.querySelector(".parts__text").classList.add("active");
        switch (index){
            case 0:
                document.querySelector(".parts__text").innerHTML = "The air purifier does not distract attention from working processes, as it has a low noise level (which does not exceed the volume of the usual noise level in the office; it is one of the quietest machines in its category)"
                break;
            case 1:
                document.querySelector(".parts__text").innerHTML = "Every 12 hours the air purifier starts a thermal treatment of the filters to get rid of the extracted airborne particles collected in the filter. It helps to avoid the filter becoming a source of infection"
                break;
            case 2:
                document.querySelector(".parts__text").innerHTML = "The air purifier can be programmed for convenient operation time and automatic start"
                break;
            case 3:
                document.querySelector(".parts__text").innerHTML = "It is equipped with a special HMI Siemens LCD screen"
                break;
            case 4:
                document.querySelector(".parts__text").innerHTML = "The air purifier ensures economical consumption of filters"
                break;
            case 5:
                document.querySelector(".parts__text").innerHTML = "It is manufactured by a German company with 40 years of experience in supplying the equipment for air purification in clean areas"
                break;
            case 6:
                document.querySelector(".parts__text").innerHTML = "It looks perfect in any room"
                break;
            case 7:
                document.querySelector(".parts__text").innerHTML = "The air purifier is safe for the environment and easy to maintain"
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
        prevEl: ".pop-up__slider-button-prev",
    },
    loop: true
});

const _name = document.querySelector("._name");
const _email = document.querySelector("._email");
const _number = document.querySelector("._number");
const _agreement = document.querySelector("._agreement");
const _canCall = document.querySelector("._canCall");

document.addEventListener("DOMContentLoaded", e => {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault()

        let error = formValidate(form);
        if(error === 0){
            let infoParams = {
                from_name: _name.value,
                number: _number.value,
                email: _email.value,
                canCall: _canCall.checked,
            }
            emailjs.send("service_qjtam0i", "template_jfawiz8", infoParams).then(function(res){
                if(res.status === 200){
                    document.querySelector(".thx").classList.add("_sended");
                    document.body.classList.add("lock")
                    form.reset();
                }
            });
        }
    }

    function formValidate(form){
        let error = 0;
        _email.classList.remove("_error");
        _number.classList.remove("_error");
        _agreement.classList.remove("_error");
        _agreement.parentElement.classList.remove("_error");
        _name.classList.remove("_error");

        if(_agreement.checked === false){
            _agreement.classList.add("_error");
            _agreement.parentElement.classList.add("_error");
            error++;
        }
        if(emailTest(_email) === false){
            _email.classList.add("_error");
            error++;
        }
        if(numberTest(_number)){
            _number.classList.add("_error");
            error++;
        }else{
            if(_email.value === "" || _number.value === "" || _name.value === ""){
                _email.classList.add("_error");
                _number.classList.add("_error");
                _name.classList.add("_error");
                error++;
            }
        }
        return error;
    }

    function numberTest(number){
        return /[a-zA-Z|а-эA-Э]/gm.test(number.value);
    }
    function emailTest(email){
        return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(email.value);
    }
});


document.querySelector(".thx__cross-wrapper").addEventListener("click", e => {
    document.querySelector(".thx").classList.add("_closed");
    document.body.classList.remove("lock")
})

let request = document.getElementById("order");
let anchors = document.querySelectorAll(".anchor");
anchors.forEach(item => {
    item.addEventListener("click", e =>{
        e.preventDefault();
        request.scrollIntoView({block:"start", behavior:"smooth"})
    })
});

new WOW().init()