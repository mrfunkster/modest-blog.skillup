const anchors    = document.querySelectorAll('a[href*="#"]')
const sections   = document.querySelectorAll('section');
const scrollTime = 800;

window.addEventListener('scroll', sectionScroll);

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    window.removeEventListener('scroll', sectionScroll);
    e.preventDefault()
    anchors.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    let viewportWidth = document.documentElement.clientWidth;
    let headerOffset;
    if(viewportWidth < 768) {
        headerOffset = 115;
    } else {
        headerOffset = 80;
    }

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
        let headerOffset;
        if(viewportWidth < 768) {
            headerOffset = 115;
        } else {
            headerOffset = 80;
        }
        if (scrollY >= (section.offsetTop - headerOffset)) {
            const navID ="#" + section.getAttribute('id');
            let nav = document.querySelector(`a[href="${navID}"]`);
            anchors.forEach(btn => btn.classList.remove('active'));
            nav.classList.add('active');
        }
    }
}