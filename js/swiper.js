
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const slider = document.querySelector(".swiper");

const swiper = new Swiper(slider, {
    
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    autoplay: true,
   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 300,
        speed: 2000,
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
  
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        grabCursor: true,
      },
  
      1200: {
        delay:3,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1500,
        slideToClickedSlide: true,
        // grabCursor: true,
        loop: true,
      },
    },
  });