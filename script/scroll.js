const anchors    = document.querySelectorAll('a[href*="#"]')
const sections   = document.querySelectorAll('section');
let header       = document.querySelector('.header');
const scrollTime = 800;

window.addEventListener('scroll', sectionScroll);

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    window.removeEventListener('scroll', sectionScroll);
    e.preventDefault();
    anchors.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    closeBurger();

    let headerOffset = header.offsetHeight; 

    const blockID = anchor.getAttribute('href').substr(1);
    let block = document.getElementById(blockID);

    $('html, body').animate({
        scrollTop: $(block).offset().top - headerOffset
    }, scrollTime);
    setTimeout(function() {
        window.addEventListener('scroll', sectionScroll);
    }, scrollTime);
    });
}

function sectionScroll() {
    for (let section of sections) {
        let pageScroll = window.scrollY;
        let viewportWidth = document.documentElement.clientWidth;
        let headerOffset = header.offsetHeight;
        if (scrollY >= (section.offsetTop - headerOffset)) {
            const navID ="#" + section.getAttribute('id');
            let nav = document.querySelector(`a[href="${navID}"]`);
            anchors.forEach(btn => btn.classList.remove('active'));
            nav.classList.add('active');
        }
    }
}