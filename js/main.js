$(document).ready(function (){
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true, 

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "fade",

  
})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true, 

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function (){
  // console.log("клик по кнопке меню");
  document
  .querySelector(".navbar__bottom")
  .classList.toggle("navbar__bottom--visible");
});
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function (){
  // console.log("клик по кнопке меню");
  document
  .querySelector("body")
  .classList.toggle("body-overflow");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  var body = $('body');
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  body.addClass('body-overflow');
};
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  var body = $('body');
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  body.removeClass('body-overflow');
};

// обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "the name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "please specify your phone number",
        },
      },
    });
  });
  $('.newsletter__subscribe').validate({
    errorClass: "invalid-subscribe",
     messages: {  
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
  $('.phone').mask('+7 (000) 000-00-00');
  AOS.init();
  
});