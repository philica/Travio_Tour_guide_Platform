let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let formClose = document.querySelector("#form-close");


let signupformBtn = document.querySelector("#signup-btn");
let loginformBtn = document.querySelector("#login-btn-2");
let signupform = document.querySelector(".signup-form-container");
let loginForm = document.querySelector(".login-form-container");
let signupformClose = document.querySelector("#signup-form-close");

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  signupform.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

loginformBtn.addEventListener('click', () => {
  signupform.classList.remove("active");
  loginForm.classList.add("active");
})

signupformBtn.addEventListener("click", () => {
  signupform.classList.add("active");
  loginForm.classList.remove("active");
});

signupformClose.addEventListener("click", () => {
  signupform.classList.remove("active");
});




videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
