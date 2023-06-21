const box1 = document.querySelector('.box-1');
box1.addEventListener('click', function() {
    box1.classList.add('box-default');
    box1.innerHTML = 'Press space';
    if (box1.getAttribute('finished') != 'true') {
        document.addEventListener('keydown', spacePress);
    }
    box1.setAttribute('finished', 'true');
})

function spacePress(e) {
    if ( e.code == 'Space' ) {
        box2Text = document.querySelector('.box-2-text');
        box2Text.innerHTML = 'Hover this box for three seconds';
        boxBG = document.getElementById('box-2-bg');
        boxBG.classList.add('box-2-bg');
        boxBG.addEventListener('transitionend', boxEnd);
    }
}

function boxEnd() {
    if (boxBG.offsetHeight >= 200) {
        boxBG.classList.add('box-2-bg-hold');
        box2Text.innerHTML = 'Next task';
        box2Text.style.color = 'white';
        box2Text.style.zIndex = '1';
    }
}