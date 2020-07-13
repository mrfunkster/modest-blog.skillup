let hamburgerBtn = document.querySelector('.nav-mobile-menu');
let navMenu      = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('open-mobile');
    if (hamburgerBtn.classList.contains('open-mobile')) {
        openBurger();
    } else {
        closeBurger();
    }
})

function openBurger() {
    navMenu.classList.add('open-mobile-menu');
    document.body.classList.add('lock');
}

function closeBurger() {
    navMenu.classList.remove('open-mobile-menu');
    document.body.classList.remove('lock');
    hamburgerBtn.classList.remove('open-mobile');
}

