let modalSendMessage = document.querySelector('#modal-send-message');
let closeBtns        = document.querySelectorAll('.close-btn');
let sendMessageBtn   = document.querySelector('#send-message');
let openSendMessage  = document.querySelector('#open-send-modal');
let modalWindows     = document.querySelectorAll('.modal');
let footerOffset     = document.querySelector('.footer');
let modalSubscribe   = document.querySelector('#modal-subscribe');
let subscribeBtn     = document.querySelector('#subscribe-btn');
let isShown          = false;
let scrollPos        = 0;

let pageHeight = footerOffset.offsetTop + footerOffset.offsetHeight;

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    if ((scrollPos >= (pageHeight / 2)) && isShown === false) {
        modalSubscribe.classList.add('show');
        document.body.classList.add('lock');
        isShown = true;
    }
})

openSendMessage.addEventListener('click', function() {
    modalSendMessage.classList.add('show');
    document.body.classList.add('lock');
});

for (let closeBtn of closeBtns) {
    closeBtn.addEventListener('click', closeModal);
}
sendMessageBtn.addEventListener('click', closeModal);
modalSubscribe.addEventListener('click', closeModal);

for (let modalWindow of modalWindows) {
    modalWindow.addEventListener('click', function(e) {
        if(e.target === modalWindow) {
            closeModal();
        }
    });
}

function closeModal() {
    for (let modalWindow of modalWindows) {
        modalWindow.classList.remove('show');
        document.body.classList.remove('lock');
    }
}