const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
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
    let blockPosition = block.offsetTop;
    let offsetPosition = blockPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    })
}

