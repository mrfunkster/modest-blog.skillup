// Slider
$(document).ready(function() {
    $('.slider-block').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: false,
        swipe: false, 
        fade: true,
        appendDots: $('.dots-container')
    });
});